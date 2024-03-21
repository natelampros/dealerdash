import React from "react";
import Dropdown from "../DropDownButton";
import { Progressbar } from "../Progressbar";

const SoldCard = ({ actual, salegoal, options, showVariance }) => {
  return (
    <div className="flex-item flex-fill small-card p-4 ">
      <div className="dashboard-title">
        <p className="boardTitle">Total sold</p>
        <Dropdown options={options} />
      </div>
      <div className="board-info">
        <p className="boardTitleNumber">{`${actual}`}</p>
        <p className="progressText">{`${actual} / ${salegoal}`}</p>
        <Progressbar
          actual={actual}
          goal={salegoal}
          showVariance={showVariance}
        />
      </div>
    </div>
  );
};

export default SoldCard;
