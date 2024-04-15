import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { metricsDefinitions } from "./modalMockData";
import ProgressNav from "./ProgressNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDataSource } from "../DataSourceContext";

const DailyModalContent = ({ onClose }) => {
  const { switchToProjection } = useDataSource();
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const categorizedMetrics = metricsDefinitions
    .filter((metric) => metric.ManualAdd)
    .reduce((acc, metric) => {
      const { Category, Subcategory } = metric;
      if (!acc[Category]) {
        acc[Category] = {};
      }
      if (!acc[Category][Subcategory]) {
        acc[Category][Subcategory] = [];
      }
      acc[Category][Subcategory].push(metric);
      return acc;
    }, {});
  const categories = Object.keys(categorizedMetrics);

  const handleNext = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };
  const handleBack = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(currentCategoryIndex - 1);
    }
  };

  const handleSave = () => {
    switchToProjection();
    onClose();
  };

  const currentCategory = categories[currentCategoryIndex];
  const subcategories = categorizedMetrics[currentCategory];

  const formatMetricName = (metricName, subcategory) => {
    let formattedName = metricName.replace(new RegExp(subcategory, "gi"), "");
    formattedName = formattedName.replace(/Appointments/gi, "Apts.");
    formattedName = formattedName.replace(/number/gi, "Num.");
    formattedName = formattedName.trim();
    return formattedName;
  };

  return (
    <div
      className="modal-box d-flex flex-row text-white"
      style={{
        backgroundColor: "#141519",
        borderRadius: "10px",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.4)",
        maxWidth: "70vw",
        minHeight: "680px",
        height: "70vh",
      }}
    >
      <ProgressNav currentCategory={currentCategory} />
      <div
        className="content-area d-flex flex-column p-3"
        style={{
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        <h2
          className="mb-4"
          style={{ fontWeight: "bold", textAlign: "left", paddingTop: "20px" }}
        >
          {currentCategory}
        </h2>
        {Object.entries(subcategories).map(([subcategory, metrics]) => (
          <div className="d-flex align-items-center mb-4" key={subcategory}>
            <h4
              className="text-white mr-3"
              style={{
                fontSize: "1.1rem",
                minWidth: "125px",
                textAlign: "left",
              }}
            >
              {subcategory}
            </h4>
            <div
              className="d-grid gap-2"
              style={{
                gridTemplateColumns: "repeat(4, 1fr)", // 4 columns for metrics
                flexGrow: 1,
              }}
            >
              {metrics.map((metric) => (
                <div
                  className="p-2"
                  key={metric.MetricID}
                  style={{ borderRadius: "5px" }}
                >
                  <label
                    htmlFor={`metric-${metric.MetricID}`}
                    className="d-block mb-2"
                    style={{ fontSize: "0.8rem", textAlign: "left" }}
                  >
                    {formatMetricName(metric.MetricName, subcategory)}
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id={`metric-${metric.MetricID}`}
                    placeholder={metric.Description}
                    style={{
                      backgroundColor: "#141519",
                      borderColor: "#6F6C6C",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="button-container d-flex justify-content-center mt-auto">
          {currentCategoryIndex > 0 ? (
            <button
              className="btn mx-2"
              onClick={handleBack}
              style={{ backgroundColor: "#343434", color: "white" }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
              Back {/* Text added next to the icon */}
            </button>
          ) : (
            <button
              className="btn mx-2"
              onClick={onClose}
              style={{ backgroundColor: "#343434", color: "white" }}
            >
              Close
            </button>
          )}
          {currentCategoryIndex < categories.length - 1 ? (
            <button
              className="btn mx-2"
              onClick={handleNext}
              style={{ backgroundColor: "#696ff2", color: "white" }}
            >
              Next <ArrowForwardIosIcon fontSize="small" />
            </button>
          ) : (
            <button
              className="btn mx-2"
              onClick={handleSave}
              style={{ backgroundColor: "#696ff2", color: "white" }}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyModalContent;
