import type { SampleDetection } from '../data/sampleDetections';

export type ReviewStatus = 'Unreviewed' | 'Confirmed' | 'Rejected' | 'Flagged';

type DetectionReviewProps = {
  detections: SampleDetection[];
  selected: SampleDetection;
  selectedId: string;
  statuses: Record<string, ReviewStatus>;
  onSelect: (id: string) => void;
  onSetStatus: (status: ReviewStatus) => void;
};

export default function DetectionReview({
  detections,
  selected,
  selectedId,
  statuses,
  onSelect,
  onSetStatus,
}: DetectionReviewProps) {
  const currentStatus = statuses[selectedId] ?? 'Unreviewed';

  return (
    <aside className="review-panel" aria-label="Sample detection review">
      <div className="review-panel-heading">
        <div>
          <p className="overline">Sample findings</p>
          <h3>Review detections</h3>
        </div>
        <span className="result-count">{String(detections.length).padStart(2, '0')}</span>
      </div>

      <div className="detection-list" role="list" aria-label="Illustrative sample detections">
        {detections.map((detection, index) => {
          const status = statuses[detection.id] ?? 'Unreviewed';
          return (
            <button
              className={`detection-row${selectedId === detection.id ? ' is-selected' : ''}`}
              key={detection.id}
              type="button"
              role="listitem"
              aria-pressed={selectedId === detection.id}
              onClick={() => onSelect(detection.id)}
            >
              <span className="detection-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="detection-row-copy">
                <strong>{detection.className}</strong>
                <small>{(detection.confidence * 100).toFixed(0)}% sample score</small>
              </span>
              <span className={`review-status status-${status.toLowerCase()}`}>{status}</span>
            </button>
          );
        })}
      </div>

      <div className="selected-detection" aria-live="polite">
        <div className="selected-heading">
          <div>
            <p className="overline">Selected record</p>
            <h4>{selected.className}</h4>
          </div>
          <span className="confidence-value">{(selected.confidence * 100).toFixed(0)}<small>%</small></span>
        </div>
        <dl className="evidence-list">
          <div><dt>Source context</dt><dd>{selected.provenance}</dd></div>
          <div><dt>Location</dt><dd><span className={`location-state state-${selected.location.type.toLowerCase()}`}>{selected.location.type}</span> {selected.location.label}</dd></div>
        </dl>
        <div className="review-actions" aria-label="Set review status">
          {(['Confirmed', 'Rejected', 'Flagged'] as const).map((status) => (
            <button
              key={status}
              className={`review-action${currentStatus === status ? ' is-active' : ''}`}
              type="button"
              aria-pressed={currentStatus === status}
              onClick={() => onSetStatus(status)}
            >
              {status}
            </button>
          ))}
        </div>
        <p className="review-state-note" role="status">Review state: {currentStatus}. Stored in this page only.</p>
      </div>
    </aside>
  );
}
