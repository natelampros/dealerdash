import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(77, 77, 77, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;


const ModalOverlay = ({ children, onClose }) => {
  const handleBackdropClick = (event) => {
    // Check if the click is directly on the backdrop (event.target) and not its children
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      {children}
    </ModalBackdrop>
  );
};


export default ModalOverlay;
