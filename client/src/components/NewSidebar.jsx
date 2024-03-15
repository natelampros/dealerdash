import React, { useState } from "react";
import { sidebarLowerMenuList, sidebarUpperMenuList } from '../mockData'
import './css/Sidebar.css';
import { Link } from "react-router-dom";
import ModalOverlay from "../modals/ModalOverlay";
import DailyModalContent from "../modals/DailyModalContent";
import icon from "../icon.png";

const NewSidebar = () => {
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
    <div className="sidebar-container">
      <div className="container-fluid">
        <div className="menu-container bg-dark flex-row col-auto w-100 h-100 min-vh-100">
          <div className="sidebar-logo justify-content-lg-start">
            <Link to={`/dealerdash`}>
              <img className="logo" src={icon} alt="App Logo" />
            </Link>
            <Link className="link d-none d-lg-inline" to={`/dealerdash`}>
              Dealer Dash
            </Link>
          </div>
          {sidebarUpperMenuList.map((menu, index) => (
            <div className="sidebar-item d-flex justify-content-lg-start justify-content-md-center justify-content-center" 
            key={index}
            onClick={() => handleSidebarItemClick(menu.title)} // Use the handler function
            >
              {
                menu.title === "Dashboard" ? (
                  <>
                    <Link className="link" to={`/dealerdash`}> 
                      {menu.icon}
                    </Link>
                    <Link className="link d-none d-lg-inline" to={`/dealerdash`}> 
                      {menu.title}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="link" to={`/${menu.title.toLowerCase()}`}> 
                      {menu.icon}
                    </Link>
                    <Link className="link d-none d-lg-inline" to={`/${menu.title.toLowerCase()}`}> 
                      {menu.title}
                    </Link>
                  </>
                )
                
              }
              
            </div>
          ))}
          <hr className="divider" />
          {sidebarLowerMenuList.map((menu, index) => (
            <div className="sidebar-item d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center" 
              key={index}
              onClick={() => handleSidebarItemClick(menu.title)} 
            >
              <Link className="link" to={`/${menu.title.toLowerCase()}`}>
                {menu.icon} 
              </Link>
              <Link className="link d-none d-lg-inline" to={`/${menu.title.toLowerCase()}`}>
                {menu.title} 
              </Link>
            </div>
          ))}
          {isModalOpen && (
            <ModalOverlay onClose={closeModal}>
              <DailyModalContent onClose={closeModal} />
            </ModalOverlay>
          )}
        </div>
      </div>
    </div>  
  )
}

export default NewSidebar
