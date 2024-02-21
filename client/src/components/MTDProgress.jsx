import React from "react";
import CircularProgressBar from "./CircularProgresBar";

const MTDProgess = () => {
  const items = [
    { actual: 35, goal: 100, label: "Sold", color: "#F6C756" },
    { actual: 35, goal: 100, label: "Gross", color: "#696FF2" },
    { actual: 70, goal: 100, label: "PVR", color: "#D672E3" },
    { actual: 65, goal: 100, label: "Sales PVR", color: "#64B864" },
    { actual: 100, goal: 100, label: "Fin. PVR", color: "#FF9F4A" },
  ];

  return (
    <div className="container">
      <div className="card" style={{ backgroundColor: "#21242C" }}>
        <div className="card-body">
          <div className="row">
            {items.map((item, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-sm-6">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MTDProgess;
