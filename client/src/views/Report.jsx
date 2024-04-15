import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const images = [
  require("../images/report/report_1.png"),
  require("../images/report/report_2.png"),
  require("../images/report/report_3.png"),
  require("../images/report/report_4.png"),
  require("../images/report/report_5.png"),
  require("../images/report/report_6.png"),
  require("../images/report/report_7.png"),
];

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#141519",
  color: "white",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Center the spinner and text horizontally
  gap: 2, // Adds some space between the spinner and the text
};

const Report = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [showProgress, setShowProgress] = useState(true);
  const [canClose, setCanClose] = useState(false); // New state to track if the modal can be closed

  const handleClick = () => {
    if (currentImageIndex === images.length - 1 && !canClose) {
      setOpen(true);
      setShowProgress(true);
      setTimeout(() => {
        setShowProgress(false);
        setCanClose(true); // Allow closing the modal after the text is shown
      }, 2000); // Hide progress after 2 seconds
      setCurrentImageIndex(0); // Reset the index
    } else if (canClose) {
      setOpen(false);
      setCanClose(false); // Reset the canClose flag
    } else {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "left -450px center",
        backgroundImage: `url(${images[currentImageIndex]})`,
        filter: open ? "blur(8px)" : "none",
      }}
      onClick={handleClick}
    >
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} onClick={handleClick}>
          {showProgress ? (
            <>
              <CircularProgress color="inherit" />
              <span>Loading</span>
            </>
          ) : (
            <h2 id="modal-modal-title">Report generated and scheduled.</h2>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Report;
