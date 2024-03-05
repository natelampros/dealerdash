import React from "react";
import CircularProgressBar from "./CircularProgresBar";
import "./css/MTDProgress.css";
import "../views/styles.css";
import Dropdown from "./DropDownButton";

const options = [
  { label: "1", value: "LAST WEEK"},
  { label: "2", value: "LAST MONTH"},
  { label: "3", value: "LAST 3 MONTHS"},
  { label: "4", value: "LAST 6 MONTHS"},
  { label: "5", value: "LAST YEAR"},
];

const MTDProgess = () => {
  const items = [
    { actual: 35, goal: 100, label: "Sold", color: "#F6C756" },
    { actual: 35, goal: 100, label: "Gross", color: "#696FF2" },
    { actual: 70, goal: 100, label: "PVR", color: "#D672E3" },
    { actual: 65, goal: 100, label: "Sales PVR", color: "#64B864" },
    { actual: 100, goal: 100, label: "Fin. PVR", color: "#FF9F4A" },
  ];

  return (
    <>
      <div className="card" style={{ backgroundColor: "#21242C" }}>
        <div className="dashboard-title">
          <p className="boardTitle">Month to Date vs Projections</p>
          <Dropdown options={options}/>
        </div>
        <div className="card-body">
            {items.map((item, index) => (
              <div key={index} className="circular-progress-bar-container">
                <div className="circular-progress-bar">
                  <CircularProgressBar
                    actual={item.actual}
                    goal={item.goal}
                    showVariance={true}
                    label={item.label}
                    color={item.color}
                  />
                </div>
                <p className="text-center">{item.label}</p>
                {index !== items.length - 1 && <div style={{ width: 20 }}></div>}
              </div>
            ))}

        </div>
      </div>
    </>
  );
};

export default MTDProgess;
