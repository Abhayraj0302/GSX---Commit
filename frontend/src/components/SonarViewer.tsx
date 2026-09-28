import type { SampleDetection } from '../data/sampleDetections';

type SonarViewerProps = {
  detections: SampleDetection[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function SonarViewer({ detections, selectedId, onSelect }: SonarViewerProps) {
  return (
    <div className="sonar-panel">
      <div className="sonar-panel-heading">
        <div>
          <p className="overline">Image viewer</p>
          <h3>Survey sample 04</h3>
        </div>
        <span className="sample-stamp">Illustrative sample</span>
      </div>
      <div className="sonar-viewer" aria-label="Illustrative sonar sample with selectable example detection boxes">
        <img src="/sample-sonar.svg" alt="Illustrative side-scan sonar image with four visible example targets" />
        {detections.map((detection, index) => (
          <button
            key={detection.id}
            type="button"
            className={`sonar-box${selectedId === detection.id ? ' is-selected' : ''}`}
            style={{
              left: `${detection.box.x}%`,
              top: `${detection.box.y}%`,
              width: `${detection.box.width}%`,
              height: `${detection.box.height}%`,
            }}
            aria-label={`Select sample ${index + 1}: ${detection.className}, ${(detection.confidence * 100).toFixed(0)} percent confidence`}
            aria-pressed={selectedId === detection.id}
            onClick={() => onSelect(detection.id)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      <div className="sonar-scale" aria-hidden="true">
        <span>PORT</span><i /><span>STARBOARD</span><span>Illustration · no field data</span>
      </div>
    </div>
  );
}
