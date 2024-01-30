import React from "react";
import styled from "styled-components";
import logo from "./logo.png"; // Make sure the path to your logo is correct
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import { ContactUs } from "./contact";

const LogoWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const SidebarItem = styled.div`
  color: #fff; // White text color
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <LogoWrapper>
          <LogoImage src={logo} alt="App Logo" />
        </LogoWrapper>
        {/*<SidebarHeader>Dealer Dash</SidebarHeader>*/}
        <SidebarItem>Analytics</SidebarItem>
        <SidebarItem>Survey</SidebarItem>
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
