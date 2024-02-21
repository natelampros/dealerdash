import React from "react";
import "./css/Progressbar.css";
import VarianceIndicator from './VarianceIndicator';

export const Progressbar = ({ actual, goal, showVariance }) => {
  const progress = actual / goal;
  const variance = (((actual - goal) / goal) * 100).toFixed(2);
  const isSuccess = actual >= goal; 

  return (
    <div className="progress-diff-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ 
            width: `${Math.min(100, progress * 100)}%`, 
            backgroundColor: isSuccess ? '#64B864' : '#DA615C'
          }} 
        />
      </div>
      {showVariance && (
        <VarianceIndicator actual={actual} goal={goal} size="large" />
      )}
    </div>
  );
};
