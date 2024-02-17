import React from "react";
import "./css/Progressbar.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const Progressbar = ({progress, diff}) => {
  console.log(diff);
  return (
    <div className="progress-diff-container">
      <div className="progress-bar">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div className="progressDiffTextContainer">
          {
            diff < 0 ? <ArrowDownwardIcon/> : <ArrowUpwardIcon/>
          }
          <p className="progressDiff">{`${diff}%`}</p>
        </div>
    </div>
  )
}