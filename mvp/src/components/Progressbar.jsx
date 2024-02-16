import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./css/Progressbar.css";

export const Progressbar = (props) => {
  const { pace, goal, diff } = props;
  return (
    <div>
      <p className="progressText">{`Pacing: $${pace} / Goal: $${goal}`}</p>
      <div>

      </div>
      <div className="progressDiffContainer">
        <ArrowDownwardIcon />
        <p className="progressDiff">{`${diff}%`}</p>
      </div>
    </div>
  )
}