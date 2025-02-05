import React from 'react';
import chatLogo from './assets/chat_bubble_figma.png';

export const ChatButton = () => {

  const buttonStyle = {
    position: 'fixed',      
    bottom: '20px',         
    right: '20px',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '50px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <>
      <p>
        <img src={chatLogo} alt="ChatButton" style={ buttonStyle } />
      </p>
    </>
  );
};