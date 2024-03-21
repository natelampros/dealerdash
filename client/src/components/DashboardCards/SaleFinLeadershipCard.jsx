import React from "react";
import Dropdown from "../DropDownButton";
import { Progressbar } from "../Progressbar";

const SaleFinLeadershipCard = ({ salesFinData, salesFinOptions }) => {
  return (
    <div className="flex-item flex-fill small-card p-4">
      <div className="dashboard-title">
        <p className="boardTitle">Sales/Fin. Managers</p>
        <Dropdown options={salesFinOptions} />
      </div>
      <div className="sales-pro-container">
        {salesFinData.map((data, index) => (
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

export default SaleFinLeadershipCard;
