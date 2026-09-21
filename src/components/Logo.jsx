import React from 'react';

export default function Logo({ size = 24, className = '', fill = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="GSX Logo"
    >
      <path d="M 48.25,48.25 H 25 A 23.25,23.25 0 1 1 48.25,25 Z" />
      <path d="M 51.75,48.25 V 25 A 23.25,23.25 0 1 1 75,48.25 Z" />
      <path d="M 51.75,51.75 H 75 A 23.25,23.25 0 1 1 51.75,75 Z" />
      <path d="M 48.25,51.75 V 75 A 23.25,23.25 0 1 1 25,51.75 Z" />
    </svg>
  );
}
