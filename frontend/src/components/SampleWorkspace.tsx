import { useEffect, useRef, useState, type ChangeEvent, type DragEvent } from 'react';
import { exportDetections } from '../lib/exportDetections';
import { sampleDetections } from '../data/sampleDetections';
import DetectionReview, { type ReviewStatus } from './DetectionReview';
import SonarViewer from './SonarViewer';

type LocalPreview = { url: string; name: string };

export default function SampleWorkspace() {
  const [selectedId, setSelectedId] = useState(sampleDetections[0].id);
  const [statuses, setStatuses] = useState<Record<string, ReviewStatus>>({});
  const [preview, setPreview] = useState<LocalPreview | null>(null);
  const [fileError, setFileError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const activeUrlRef = useRef<string | null>(null);
  const pendingUrlRef = useRef<string | null>(null);
  const requestRef = useRef(0);
  const selected = sampleDetections.find((item) => item.id === selectedId) ?? sampleDetections[0];

  useEffect(() => () => {
    requestRef.current += 1;
    if (activeUrlRef.current) URL.revokeObjectURL(activeUrlRef.current);
    if (pendingUrlRef.current) URL.revokeObjectURL(pendingUrlRef.current);
  }, []);

  const setReviewStatus = (status: ReviewStatus) => {
    setStatuses((current) => ({ ...current, [selectedId]: status }));
  };

  const clearPreview = () => {
    requestRef.current += 1;
    if (activeUrlRef.current) URL.revokeObjectURL(activeUrlRef.current);
    if (pendingUrlRef.current) URL.revokeObjectURL(pendingUrlRef.current);
    activeUrlRef.current = null;
    pendingUrlRef.current = null;
    setPreview(null);
    setFileError('');
    if (inputRef.current) inputRef.current.value = '';
  };

  const previewFile = (file?: File) => {
    if (!file) return;
    setFileError('');
    if (!file.type.startsWith('image/') || file.size === 0) {
      setFileError('Choose a readable image file to preview.');
      return;
    }

    requestRef.current += 1;
    const request = requestRef.current;
    if (pendingUrlRef.current) URL.revokeObjectURL(pendingUrlRef.current);
    const candidateUrl = URL.createObjectURL(file);
    pendingUrlRef.current = candidateUrl;
    const image = new Image();
    image.onload = () => {
      if (request !== requestRef.current) {
        URL.revokeObjectURL(candidateUrl);
        return;
      }
      if (activeUrlRef.current) URL.revokeObjectURL(activeUrlRef.current);
      activeUrlRef.current = candidateUrl;
      pendingUrlRef.current = null;
      setPreview({ url: candidateUrl, name: file.name });
    };
    image.onerror = () => {
      URL.revokeObjectURL(candidateUrl);
      if (pendingUrlRef.current === candidateUrl) pendingUrlRef.current = null;
      if (request === requestRef.current) setFileError('This image could not be opened. Try another file.');
    };
    image.src = candidateUrl;
  };

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    previewFile(event.target.files?.[0]);
    event.target.value = '';
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    previewFile(event.dataTransfer.files[0]);
  };

  return (
    <section className="sample-workspace section-shell" id="workspace" aria-labelledby="workspace-title">
      <div className="section-intro workspace-intro">
        <div>
          <p className="overline">Interactive sample · all records illustrative</p>
          <h2 id="workspace-title">Inspect a sonar pass.</h2>
          <p className="section-lede">Select a marked sample to review its evidence and location status. These examples demonstrate the interface; they are not model predictions.</p>
        </div>
        <div className="export-controls" aria-label="Export illustrative sample records">
          <button type="button" className="small-button" onClick={() => exportDetections('json', sampleDetections)}>Export JSON</button>
          <button type="button" className="small-button" onClick={() => exportDetections('csv', sampleDetections)}>Export CSV</button>
        </div>
      </div>

      <div className="workspace-grid">
        <SonarViewer detections={sampleDetections} selectedId={selectedId} onSelect={setSelectedId} />
        <DetectionReview
          detections={sampleDetections}
          selected={selected}
          selectedId={selectedId}
          statuses={statuses}
          onSelect={setSelectedId}
          onSetStatus={setReviewStatus}
        />
      </div>

      <div
        className={`local-preview${isDragging ? ' is-dragging' : ''}`}
        onDragEnter={(event) => { event.preventDefault(); setIsDragging(true); }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsDragging(false);
        }}
        onDrop={handleDrop}
      >
        <div className="local-preview-heading">
          <div>
            <p className="overline">Your file · browser preview only</p>
            <h3>Preview an image locally.</h3>
            <p>This page does not upload or analyze your file. Sample detections above are kept separate.</p>
          </div>
          <div className="local-preview-actions">
            <input ref={inputRef} className="visually-hidden" id="sonar-image-input" type="file" accept="image/*" onChange={handleFileInput} tabIndex={-1} aria-hidden="true" />
            <button className="small-button small-button-accent" type="button" onClick={() => inputRef.current?.click()}>Choose image</button>
            {preview && <button className="text-button" type="button" onClick={clearPreview}>Clear image</button>}
          </div>
        </div>
        {fileError && <p className="file-error" role="alert">{fileError}</p>}
        <div className={`local-preview-stage${preview ? ' has-preview' : ''}`}>
          {preview ? (
            <>
              <img src={preview.url} alt={`Local preview of ${preview.name}`} />
              <p className="preview-file-name">Local preview · {preview.name}</p>
            </>
          ) : (
            <div className="preview-empty">
              <span className="preview-bracket" aria-hidden="true">+</span>
              <p>Drop a sonar image here, or choose a file</p>
              <small>Image preview stays in this browser. No detections will be shown.</small>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
