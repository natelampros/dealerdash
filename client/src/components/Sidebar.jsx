import React from "react";
import styled from "styled-components";
import icon from "../icon.png";
import GridViewIcon from '@mui/icons-material/GridView';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import './css/Sidebar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  background-color: #696FF2;
`;

const SidebarItem = styled.div`
  color: #fff; // White text color
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 25px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;

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
  width: 15%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Added this line
`;

const sideBarUpperMenuList = [
  {
    title: "Dashboard",
    icon: <GridViewIcon />,
  },
  {
    title: "Daily",
    icon: <CalendarMonthIcon />,
  },
  {
    title: "Report",
    icon: <ContentPasteOutlinedIcon />
  },
  {
    title: "History",
    icon: <ContentCopyOutlinedIcon/>
  },
]

const sideBarLowerMenuList = [
  {
    title: "Settings",
    icon: <SettingsIcon />
  },
  {
    title: "Notifications",
    icon: <NotificationsNoneIcon />
  },
  {
    title: "Sign Out",
    icon: <LogoutIcon />
  }
]

const Sidebar = () => {

  return (
    <SidebarContainer>
      <div>
        <LogoWrapper>
          <LogoImage src={icon} alt="App Logo" />
          Dealer Dash
        </LogoWrapper>
        {/*<SidebarHeader>Dealer Dash</SidebarHeader>*/}
        {
          sideBarUpperMenuList.map((menu, index) => (
            <SidebarItem key={index}>
              {
                menu.title === "Dashboard" ? (
                  <Link className="link" to={`/dealerdash`}>{menu.icon} {menu.title}</Link>
                ) : (
                  <Link className="link" to={`/${menu.title}`}>{menu.icon} {menu.title}</Link>
                )
              }
              
            </SidebarItem>
          ))
        }
        <hr className="divider"/>
        { 
          sideBarLowerMenuList.map((menu, index) => (
            <SidebarItem key={index}>
              <Link className="link" to={`/${menu.title}`}>{menu.icon} {menu.title}</Link>
            </SidebarItem>
          ))
        } 
        {/* <SidebarItem>Survey</SidebarItem>s */}
      </div>
      {/* ... other sidebar items */}
      <div>
        {/* <SidebarTitle>Contact Us</SidebarTitle>
        <ContactUs /> */}
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
