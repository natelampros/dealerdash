import React from "react";
import Dropdown from "./DropDownButton";
import "../views/styles.css";

const Card = ({ boardTitle, options, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        {boardTitle && <p className="boardTitle">{boardTitle}</p>}
        {options && <Dropdown options={options} />}
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
