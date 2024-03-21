import React, { useState, useEffect } from "react";
import VarianceIndicator from "./VarianceIndicator";

const CircularProgressBar = ({ actual, goal, showVariance, label, color }) => {
  const [scale, setScale] = useState(1); // Default scale
  const radius = 60; // Base radius
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progressPercent = actual / goal;
  const strokeDashoffset = circumference - progressPercent * circumference;

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 480) {
        setScale(screenWidth / 960); // Assume 480 is half the base screen size
      } else {
        setScale(1); // Default scale for larger screens
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: radius * 2,
        height: radius * 2,
        transform: `scale(${scale})`, // Apply the dynamic scale here
        transformOrigin: "center center", // Ensure the component scales from its center
      }}
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          stroke="#131523"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          // color: isSuccess ? '#64B864' : '#DA615C'
        }}
      >
        <div style={{ fontSize: "1.2em" }}>{`${(progressPercent * 100).toFixed(
          0
        )}%`}</div>
        {showVariance && (
          <VarianceIndicator actual={actual} goal={goal} size="small" />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-20px",
          width: "100%",
          textAlign: "center",
          fontSize: "0.9em",
          color: "#ffffff",
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default CircularProgressBar;
