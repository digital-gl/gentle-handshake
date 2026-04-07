import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const pct = ((current + 1) / total) * 100;
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-bm-gray">Slide {current + 1} de {total}</span>
        <span className="text-xs text-bm-orange font-semibold">{Math.round(pct)}%</span>
      </div>
      <div className="bm-progress-bar">
        <div className="bm-progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
