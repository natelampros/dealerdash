import React, { useState } from "react";
import styled from "styled-components";
import icon from "../icon.png";
// import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
// import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
// import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
// import { ContactUs } from "../contact";
// ... other imports
import ModalOverlay from "../modals/ModalOverlay";
import DailyModalContent from "../modals/DailyModalContent";
import './css/Sidebar.css';
import { Link } from 'react-router-dom';
import { sidebarLowerMenuList, sidebarUpperMenuList } from "../mockData";

const LogoWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
  color: white;
  font-size: 20px;
  gap: 10px;
  font-weight: bold;
`;

const LogoImage = styled.img`
  max-width: 20%;
  border-radius: 10px;
  height: auto;
  background-color: #696ff2;
`;

const SidebarItem = styled.div`
  color: #fff; // White text color
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 25px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: flex-start !important;
  gap: 10px;
  align-items: center;
  width: 100%;

  &:hover {
    background-color: #696FF2; // Darker background color on hover
    color: #ffffff;
  }
  &:active {
    background-color: #3e4294
    color: #ffffff;
  }
`;
// const SidebarTitle = styled.div`
//   color: #fff; // White text color
//   padding: 10px 20px;
//   margin: 10px 0;
//   font-size: 1.2em;
// `;

// Update to SidebarContainer
const SidebarContainer = styled.div`
  background-color: #0B0D1E;
  width: 10%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Added this line
`;

const Sidebar = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSidebarItemClick = (title) => {
    if (title === "Daily") {
      openModal();
    }
  };


  return (
    <div className="sidebar d-flex">
        <LogoWrapper>
          <LogoImage src={icon} alt="App Logo" />
          Dealer Dash
        </LogoWrapper>
        {/*<SidebarHeader>Dealer Dash</SidebarHeader>*/}
        {sidebarUpperMenuList.map((menu, index) => (
          <SidebarItem
          key={index}
          onClick={() => handleSidebarItemClick(menu.title)} // Use the handler function
          >
            {
              menu.title === "Dashboard" ? (
                <Link className="link" to={`/dealerdash`}> 
                  {menu.icon} {menu.title}
                </Link>
              ) : (
                <Link className="link" to={`/${menu.title}`}> 
                  {menu.icon} {menu.title}
                </Link>
              )
              
            }
            
          </SidebarItem>
        ))}
        <hr className="divider" />
        {sidebarLowerMenuList.map((menu, index) => (
          <SidebarItem key={index}>
            {menu.icon} {menu.title}
          </SidebarItem>
        ))}
      {/* <SidebarItem>Survey</SidebarItem>s */}
      {/* ... other sidebar items */}
      {/* <SidebarTitle>Contact Us</SidebarTitle>
      <ContactUs /> */}
      {isModalOpen && (
        <ModalOverlay onClose={closeModal}>
          <DailyModalContent onClose={closeModal} />
        </ModalOverlay>
      )}
    </div>
  );
};

export default Sidebar;
