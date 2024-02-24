import React, { useState, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./css/DropdownButton.css";

const Dropdown = ( {options} ) => {
  const [isOpen, setIsOpen] = useState(false);
  const [curOption, setCurOption] = useState(`${options[0].value}`);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (value, event) => {
    setCurOption(value);
    setIsOpen(false);
    event.stopPropagation();
  }

  useEffect(() => {
    
  })

  return (
    <div className="dropdown-btn">
      <button className="toggle-btn" onClick={toggleDropdown}>
        <span className="cur-toggle">{`${curOption}`}</span>
        {
          isOpen ? <KeyboardArrowUpIcon></KeyboardArrowUpIcon> : <KeyboardArrowDownIcon> </KeyboardArrowDownIcon>
        }
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li 
              className="dropdown-option" 
              key={option.label} 
              onClick={(event) => handleOptionChange(option.value, event)}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;