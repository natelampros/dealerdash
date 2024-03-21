import React from "react";
import { Progressbar } from "../Progressbar";

const FixedOpsCard = ({ fixedopData, colors }) => {
  return (
    <div className="flex-item small-card p-4">
      <div className="dashboard-title">
        <p className="boardTitle">Fixed Operations</p>
      </div>
      <div className="sales-pro-container">
        {fixedopData.map((data, index) => (
          <div className="progress-bar-container" key={index}>
            <div className="progress-bar-header">
              <p className="progress-bar-name">{data.name}</p>
            </div>
            <Progressbar
              actual={data.actual}
              goal={data.goal}
              showVariance={true}
              showPace={true}
              fixedColor={colors.purple}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixedOpsCard;
