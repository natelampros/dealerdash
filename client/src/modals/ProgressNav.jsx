import React from "react";
import { metricsDefinitions } from "./modalMockData";
import "bootstrap/dist/css/bootstrap.min.css";

const getUniqueCategories = (definitions) => {
  const categorySet = new Set();
  definitions.forEach((definition) => {
    if (definition.ManualAdd) {
      categorySet.add(definition.Category);
    }
  });
  return Array.from(categorySet);
};

const ProgressNav = ({ currentCategory }) => {
  const uniqueCategories = getUniqueCategories(metricsDefinitions);

  const navContainerStyle = {
    backgroundColor: "#0B0D1E",
    width: "250px",
    // padding: '20px',
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    flex: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px 10px",
  };

  const navItemStyle = {
    color: "white",
    display: "flex",
    alignItems: "center",
    fontSize: ".8rem",
    padding: "10px 0",
    position: "relative",
  };

  const circleStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "2px solid #696ff2",
    position: "absolute",
    left: "15px",
  };

  const lineStyle = {
    borderLeft: "2px solid #696ff2",
    height: "30px",
    position: "absolute",
    left: "19px",
    top: "-15px",
  };

  return (
    <div className="d-flex flex-column text-white" style={navContainerStyle}>
      {uniqueCategories.map((category, index) => (
        <div style={navItemStyle} key={category}>
          {index > 0 && <div style={lineStyle} />}
          <div
            style={{
              ...circleStyle,
              backgroundColor:
                currentCategory === category ? "#696ff2" : "transparent",
              border:
                currentCategory === category
                  ? "2px solid #ffffff"
                  : "2px solid #696ff2",
            }}
          />
          <span
            style={{
              paddingLeft: "40px",
              fontWeight: currentCategory === category ? "bold" : "normal",
            }}
          >
            {category}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProgressNav;
