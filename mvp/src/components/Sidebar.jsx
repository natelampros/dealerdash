import React from "react";
import styled from "styled-components";
import logo from "../logo.png"; // Make sure the path to your logo is correct
import GridViewIcon from '@mui/icons-material/GridView';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
// import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
// import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
// import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import { ContactUs } from "../contact";
import './css/Sidebar.css';

const LogoWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  max-width: 90%;
  height: auto;
`;

const SidebarItem = styled.div`
  color: #fff; // White text color
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;

  &:hover {
    background-color: white; // Darker background color on hover
    color: #11121e;
  }
`;
const SidebarTitle = styled.div`
  color: #fff; // White text color
  padding: 10px 20px;
  margin: 10px 0;
  font-size: 1.2em;
`;
// Update to SidebarContainer
const SidebarContainer = styled.div`
  background-color: #1d1d29;
  width: 250px;
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
          <LogoImage src={logo} alt="App Logo" />
        </LogoWrapper>
        {/*<SidebarHeader>Dealer Dash</SidebarHeader>*/}
        {
          sideBarUpperMenuList.map((menu, index) => (
            <SidebarItem key={index}>
              {menu.icon} {menu.title}
            </SidebarItem>
          ))
        }
        <hr className="divider"/>
        { 
          sideBarLowerMenuList.map((menu, index) => (
            <SidebarItem key={index}>
              {menu.icon} {menu.title}
            </SidebarItem>
          ))
        } 
        {/* <SidebarItem>Survey</SidebarItem>s */}
      </div>
      {/* ... other sidebar items */}
      <div>
        <SidebarTitle>Contact Us</SidebarTitle>
        <ContactUs />
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
