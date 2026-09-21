/**
 * HyperText — letter-scramble reveal animation
 *
 * Adapted from the shadcn/magic-ui HyperText component.
 * Converted to plain JSX + vanilla CSS (no TypeScript, no Tailwind, no cn util).
 *
 * Behaviour: on mount the text is revealed letter-by-letter through random
 * character scrambling, then settles on the final value. Re-runs if `text`
 * or `duration` props change.
 */

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const getRandomInt = (max) => Math.floor(Math.random() * max);

export function HyperText({
  text,
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className = "",
  style = {},
}) {
  const [displayText, setDisplayText] = useState(text.split(""));
  const iterations = useRef(0);

  useEffect(() => {
    iterations.current = 0;
    const interval = setInterval(
      () => {
        if (iterations.current < text.length) {
          setDisplayText((t) =>
            t.map((l, i) =>
              l === " "
                ? l
                : i <= iterations.current
                  ? text[i]
                  : ALPHABETS[getRandomInt(26)],
            ),
          );
          iterations.current += 0.1;
        } else {
          clearInterval(interval);
        }
      },
      duration / (text.length * 10),
    );

    return () => clearInterval(interval);
  }, [text, duration]);

  return (
    <span className={`hyper-text ${className}`} style={style}>
      <AnimatePresence mode="wait">
        {displayText.map((letter, i) => (
          <motion.span
            key={i}
            className={`hyper-text-letter${letter === " " ? " hyper-text-space" : ""}`}
            {...framerProps}
          >
            {letter.toUpperCase()}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
}
