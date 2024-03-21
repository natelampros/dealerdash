import React from "react";
import Dropdown from "../DropDownButton";
import { Doughnut } from "react-chartjs-2";

const OutreachCard = ({ outreachData, outreachOptions, outreachConfig }) => {
  return (
    <div className="flex-item small-card p-4">
      <div className="dashboard-title">
        <p className="boardTitle">Outreach</p>
        <Dropdown options={outreachOptions} />
      </div>
      <div className="progress-container">
        <Doughnut data={outreachData} options={outreachConfig} />
      </div>
    </div>
  );
};

export default OutreachCard;
