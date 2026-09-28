import type { SampleDetection } from '../data/sampleDetections';

function escapeCsv(value: string | number) {
  const text = String(value);
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function createCsv(rows: SampleDetection[]) {
  const columns = [
    'record_type',
    'id',
    'class',
    'confidence',
    'provenance',
    'location_type',
    'location_label',
    'box_x',
    'box_y',
    'box_width',
    'box_height',
  ];
  const lines = [columns.join(',')];
  rows.forEach((row) => {
    lines.push([
      'illustrative_sample',
      row.id,
      row.className,
      row.confidence,
      row.provenance,
      row.location.type,
      row.location.label,
      row.box.x,
      row.box.y,
      row.box.width,
      row.box.height,
    ].map(escapeCsv).join(','));
  });
  return lines.join('\r\n');
}

export function exportDetections(format: 'json' | 'csv', rows: SampleDetection[]): void {
  const isJson = format === 'json';
  const content = isJson
    ? JSON.stringify({ dataType: 'illustrative_sample', notice: 'Sample data only. Not a model result.', detections: rows }, null, 2)
    : createCsv(rows);
  const mimeType = isJson ? 'application/json' : 'text/csv;charset=utf-8';
  const blobUrl = URL.createObjectURL(new Blob([content], { type: mimeType }));
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = `pelagic-sample-detections.${format}`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
}
