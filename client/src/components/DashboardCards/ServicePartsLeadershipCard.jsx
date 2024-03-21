import React from "react";
import Dropdown from "../DropDownButton";
import { Progressbar } from "../Progressbar";

const ServicePartsLeadershipCard = ({ srvcPartsData, servicePartsOptions }) => {
  return (
    <div className="flex-item flex-fill small-card p-4">
      <div className="dashboard-title">
        <p className="boardTitle">Srvc/Parts Managers</p>
        <Dropdown options={servicePartsOptions} />
      </div>
      <div className="sales-pro-container">
        {srvcPartsData.map((data, index) => (
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

export default ServicePartsLeadershipCard;
