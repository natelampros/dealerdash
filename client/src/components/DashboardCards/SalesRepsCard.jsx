import React from "react";
import Dropdown from "../DropDownButton";
import { Progressbar } from "../Progressbar";

const SalesRepsCard = ({ salesproData, salesproOptions }) => {
  return (
    <div className="flex-item small-card">
      <div className="dashboard-title">
        <p className="boardTitle">Sales Pros</p>
        <Dropdown options={salesproOptions} />
      </div>
      <div className="sales-pro-container">
        {salesproData.map((data, index) => (
          <div className="progress-bar-container" key={index}>
            <div className="progress-bar-header">
              <p className="progress-bar-name">{data.name}</p>
              <p className="progress-bar-number">
                {`${data.actual} / ${data.goal}`}
              </p>
            </div>
            <Progressbar
              actual={data.actual}
              goal={data.goal}
              showVariance={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesRepsCard;
