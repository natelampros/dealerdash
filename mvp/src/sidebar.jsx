import React from 'react';
import styled from 'styled-components';
import logo from './logo.png'; // Make sure the path to your logo is correct

// Styled components for the sidebar
const SidebarContainer = styled.div`
  background-color: #1d1d29; // Your desired background color
  width: 250px; // Adjust the width as needed
  height: 100vh; // Full height of the viewport
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

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

const SidebarHeader = styled.h2`
  color: #fff;
  text-align: center;
`;

const SidebarItem = styled.div`
  color: #fff; // White text color
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333; // Darker background color on hover
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoWrapper>
        <LogoImage src={logo} alt="App Logo" />
      </LogoWrapper>
      {/*<SidebarHeader>Dealer Dash</SidebarHeader>*/}
      <SidebarItem>Analytics</SidebarItem>
      {/* ... other sidebar items */}
    </SidebarContainer>
  );
};

export default Sidebar;
