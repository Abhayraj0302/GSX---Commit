export type SampleDetection = {
  id: string;
  className: 'Pipe' | 'Shipwreck' | 'Mine-like Contact' | 'Crab Pot';
  confidence: number;
  provenance: string;
  location: {
    type: 'Real' | 'Simulated' | 'Unavailable';
    label: string;
  };
  box: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

export const sampleDetections: SampleDetection[] = [
  {
    id: 'sample-01',
    className: 'Pipe',
    confidence: 0.92,
    provenance: 'Illustrative only, sample source "A"',
    location: { type: 'Unavailable', label: 'No verified navigation link' },
    box: { x: 16, y: 43, width: 23, height: 13 },
  },
  {
    id: 'sample-02',
    className: 'Shipwreck',
    confidence: 0.87,
    provenance: 'Illustrative example · Shipwreck class',
    location: { type: 'Unavailable', label: 'No verified navigation link' },
    box: { x: 58, y: 25, width: 19, height: 24 },
  },
  {
    id: 'sample-03',
    className: 'Mine-like Contact',
    confidence: 0.74,
    provenance: 'Illustrative example · MILCO taxonomy',
    location: { type: 'Unavailable', label: 'No verified navigation link' },
    box: { x: 41, y: 67, width: 12, height: 15 },
  },
  {
    id: 'sample-04',
    className: 'Crab Pot',
    confidence: 0.81,
    provenance: 'Illustrative example · Crab Pot class',
    location: { type: 'Unavailable', label: 'No verified navigation link' },
    box: { x: 79, y: 58, width: 13, height: 16 },
  },
];
