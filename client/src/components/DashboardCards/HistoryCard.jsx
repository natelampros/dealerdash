import React from "react";
import Dropdown from "../DropDownButton";
import { Bar } from "react-chartjs-2";

const HistoryCard = ({ yearlyOptions, chartData, ops }) => {
  return (
    <div className="flex-item big-card">
      <div className="col yearly board">
        <div className="dashboard-title">
          <p className="boardTitle">12 Month History</p>
          <Dropdown options={yearlyOptions} />
        </div>
        <div className="col yearly-calendar">
          <Bar data={chartData} options={ops} />
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
