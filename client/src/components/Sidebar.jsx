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
import "./css/Sidebar.css";
import { Link } from "react-router-dom";
import { sidebarLowerMenuList, sidebarUpperMenuList } from "../mockData";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SidebarContainer = styled.div`
  background-color: teal;
  width: ${(props) => (props.collapsed ? "80px" : "10%")};
  height: 100vh;
  padding: 20px;
  transition: width 0.3s; // Add transition for smooth collapsing effect
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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
  position: relative;
`;
const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  position: absolute;
  top: 20px; // Adjust as needed to align with the logo
  left: 100%; // Position it to the right of the LogoWrapper content
  transform: translateX(-100%); // Move it back into view
  // Add more styling here as needed...
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

  .menu-text {
    display: ${(props) => (props.collapsed ? "none" : "inline")};
  }

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
// const SidebarContainer = styled.div`
//   background-color: teal;
//   width: 10%;
//   height: 100vh;
//   padding: 20px;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between; // Added this line
// `;

const Sidebar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

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
    <SidebarContainer collapsed={collapsed}>
      <LogoWrapper>
        <ToggleButton onClick={toggleSidebar}>
          {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </ToggleButton>
        <LogoImage src={icon} alt="App Logo" />
        {!collapsed && <span>Dealer Dash</span>}{" "}
        {/* Only show text if not collapsed */}
      </LogoWrapper>
      {sidebarUpperMenuList.map((menu, index) => (
        <SidebarItem
          key={index}
          onClick={() => handleSidebarItemClick(menu.title)}
          collapsed={collapsed}
        >
          <Link
            className={`link ${collapsed ? "collapsed-link" : ""}`}
            to={menu.title === "Dashboard" ? `/dealerdash` : `/${menu.title}`}
          >
            {menu.icon}
            {!collapsed && <span>{menu.title}</span>}{" "}
            {/* Only show text if not collapsed */}
          </Link>
        </SidebarItem>
      ))}
      <hr className="divider" />
      {sidebarLowerMenuList.map((menu, index) => (
        <SidebarItem key={index} collapsed={collapsed}>
          {menu.icon}
          {!collapsed && <span>{menu.title}</span>}{" "}
          {/* Only show text if not collapsed */}
        </SidebarItem>
      ))}
      {isModalOpen && (
        <ModalOverlay onClose={closeModal}>
          <DailyModalContent onClose={closeModal} />
        </ModalOverlay>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
