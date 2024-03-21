import React from "react";
import Dropdown from "../DropDownButton";
import { Progressbar } from "../Progressbar";

const GrossCard = ({ pace = 0, goal = 0, options, showVariance }) => {
  const p = pace.toLocaleString();
  const g = goal.toLocaleString();

  return (
    <div className="flex-item flex-fill small-card">
      <div className="dashboard-title">
        <p className="boardTitle">Total gross</p>
        <Dropdown options={options} />
      </div>
      <div className="board-info">
        <p className="boardTitleNumber">{`$${p}`}</p>
        <p className="progressText">{`Pacing: $${p} / Goal: $${g}`}</p>
        <Progressbar actual={pace} goal={goal} showVariance={showVariance} />
      </div>
    </div>
  );
};

export default GrossCard;
