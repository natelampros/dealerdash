import React, { useState } from "react";

// Import your images
const images = [
  require("../images/history/history_1.png"),
  require("../images/history/history_2.png"),
  require("../images/history/history_3.png"),
  require("../images/history/history_4.png"),
  require("../images/history/history_5.png"),
  require("../images/history/history_6.png"),
  require("../images/history/history_7.png"),
  require("../images/history/history_8.png"),
  require("../images/history/history_9.png"),
  require("../images/history/history_10.png"),
  require("../images/history/history_11.png"),
];

const History = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    // Simply go to the next image, loop back to the first after the last one
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "left -450px center",
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
      onClick={handleClick}
    >
      {/* Click anywhere on this div to change the background image */}
    </div>
  );
};

export default History;

// import Calendar from "../components/Calendar";
// import Sidebar from "../components/Sidebar";
// import dayjs from "dayjs";
// import "./history.css";
// import "./styles.css";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// import React from "react";

// const keyMetricsList = [
//   {
//     key: 1,
//     name: "Productivity",
//     options: {},
//   },
//   {
//     key: 2,
//     name: "Financial",
//     options: {},
//   },
//   {
//     key: 3,
//     name: "Sales Leadership",
//     options: {},
//   },
//   {
//     key: 4,
//     name: "F&I Leadership",
//     options: {},
//   },
//   {
//     key: 5,
//     name: "Service Leadership",
//     options: {},
//   },
//   {
//     key: 6,
//     name: "Fixed Operations",
//     options: {},
//   },
//   {
//     key: 7,
//     name: "Receivables",
//     options: {},
//   },
//   {
//     key: 8,
//     name: "Fixed Receivables",
//     options: {},
//   },
// ];

// const handleMetricItems = (name) => {};

// const History = () => {
//   return (
//     <div className="history-container">
//       <div className="history-body">
//         <div className="key-metrics-options">
//           <div className="boardTitle">Select Key Metrics to View:</div>
//           {keyMetricsList.map((item) => {
//             return (
//               <div
//                 className={`key-metric ${item.name}`}
//                 onClick={handleMetricItems(item.name)}
//               >
//                 {item.name}
//                 <KeyboardArrowDownIcon style={{ color: "#62636A" }} />
//               </div>
//             );
//           })}
//         </div>
//         <div className="calendar-container">
//           <Calendar
//             referenceDate={dayjs(new Date())}
//             views={["month", "year", "day"]}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default History;
