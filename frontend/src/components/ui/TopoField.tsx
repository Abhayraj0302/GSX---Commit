import { useEffect, useRef, useState } from 'react';

type TopoFieldProps = {
  className?: string;
};

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform float u_dpr;

  vec3 permute(vec3 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
  }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.2113248654, 0.3660254038, -0.5773502692, 0.0243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m *= m;
    m *= m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.792842914 - 0.85373472 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    float gridSize = 48.0 * u_dpr;
    vec2 gridFract = fract(gl_FragCoord.xy / gridSize);
    float lineThickness = 1.0 / gridSize;
    float gridLines = step(1.0 - lineThickness, gridFract.x) + step(1.0 - lineThickness, gridFract.y);
    gridLines = clamp(gridLines, 0.0, 1.0) * 0.08;

    vec2 noisePos = st * 1.4 + vec2(u_time * 0.015, u_time * 0.025);
    float n = snoise(noisePos) * 0.5 + 0.5;
    float bandVal = n * 10.0;
    float triangleWave = abs(fract(bandVal) - 0.5) * 2.0;
    float topoLines = (1.0 - smoothstep(0.0, 0.022, triangleWave)) * 0.34;

    vec3 color = vec3(0.024, 0.075, 0.110);
    color += vec3(0.06, 0.30, 0.34) * gridLines;
    color += vec3(0.08, 0.48, 0.55) * topoLines;
    gl_FragColor = vec4(color, 1.0);
  }
`;

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error('Unable to create WebGL shader.');
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) ?? 'Unknown WebGL shader error.';
    gl.deleteShader(shader);
    throw new Error(message);
  }
  return shader;
}

export default function TopoField({ className }: TopoFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webglReady, setWebglReady] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setWebglReady(false);
      return undefined;
    }

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      powerPreference: 'low-power',
    });
    if (!gl) {
      setWebglReady(false);
      return undefined;
    }

    let program: WebGLProgram | null = null;
    let buffer: WebGLBuffer | null = null;
    let frame = 0;
    let timeLocation: WebGLUniformLocation | null = null;
    let resolutionLocation: WebGLUniformLocation | null = null;
    let dprLocation: WebGLUniformLocation | null = null;

    try {
      const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
      const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
      program = gl.createProgram();
      if (!program) throw new Error('Unable to create WebGL program.');
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program) ?? 'Unable to link WebGL program.');
      }

      gl.useProgram(program);
      buffer = gl.createBuffer();
      if (!buffer) throw new Error('Unable to create WebGL buffer.');
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

      const positionLocation = gl.getAttribLocation(program, 'a_position');
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      timeLocation = gl.getUniformLocation(program, 'u_time');
      resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
      dprLocation = gl.getUniformLocation(program, 'u_dpr');
      if (!timeLocation || !resolutionLocation || !dprLocation) throw new Error('WebGL uniforms are unavailable.');

      const resize = () => {
        const bounds = canvas.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.max(1, Math.round(bounds.width * dpr));
        canvas.height = Math.max(1, Math.round(bounds.height * dpr));
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
        gl.uniform1f(dprLocation, dpr);
      };
      window.addEventListener('resize', resize);
      resize();
      setWebglReady(true);

      const startTime = performance.now();
      const render = (now: number) => {
        if (gl.isContextLost()) return;
        gl.uniform1f(timeLocation, (now - startTime) * 0.001);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        frame = window.requestAnimationFrame(render);
      };
      frame = window.requestAnimationFrame(render);

      return () => {
        window.removeEventListener('resize', resize);
        window.cancelAnimationFrame(frame);
        if (buffer) gl.deleteBuffer(buffer);
        if (program) gl.deleteProgram(program);
      };
    } catch {
      if (buffer) gl.deleteBuffer(buffer);
      if (program) gl.deleteProgram(program);
      setWebglReady(false);
      return undefined;
    }
  }, [reducedMotion]);

  return (
    <div className={`topo-field ${className ?? ''}`} aria-hidden="true">
      <div className={`topo-field-static${webglReady && !reducedMotion ? ' is-hidden' : ''}`} />
      <canvas
        ref={canvasRef}
        className={`topo-field-canvas${webglReady && !reducedMotion ? ' is-visible' : ''}`}
      />
    </div>
  );
}
