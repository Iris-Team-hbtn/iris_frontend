import React from 'react';
import chatLogo from './assets/chat_bubble_figma.png';

export const ChatButton = () => {

  const buttonStyle = {
    position: 'fixed',      
    bottom: '10px',         
    right: 'px',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '50px',
    transition: 'all 0.3s ease',
  };

  return (
    <>
      <p>
        <img src={chatLogo} alt="ChatButton" style={ buttonStyle } />
      </p>
    </>
  );
};

export const Head1 = () => {
  const headerStyle = {
    backgroundColor: '#000000',
    width: '100%',
    height: '9%', // Adjusted height to make it better
    position: 'fixed',
    top: '0',
    left: '0',
    color: 'white',
    margin: '0', // Remove any default margin
    padding: '0', // Remove any default padding
    display: 'flex', // Use flex for proper layout inside
    alignItems: 'center', // Vertically center the text
  };
  const headerTextStyle = {
    fontSize: '300%',
  };
  return(
    <div style={headerStyle}>
      <h1 style={headerTextStyle}>Iris</h1>
    </div>
  );
};

export const ChatBox = () => {
  const rectangleStyle = {
    width: '29%',
    height: '68%',
    backgroundColor: '#F5F5F5',
    position: 'fixed',
    bottom: '9%',         
    right: '6%',
    padding: '20px 30px',
    border: '1px solid #D3D3D3',
    borderRadius: '15px',
    borderBottomRightRadius: '0px',
    transition: 'all 0.3s ease',
  };
  return(
          <div style={rectangleStyle}>
            <HeaderChat/>
          </div>
  );
}

export const HeaderChat = () => {
  const headerChatStyle={
    width: '33.8%',
    height: '8.6%',
    backgroundColor: '#000000',
    position: 'fixed',
    bottom: '78%',
    right: '6%',
    borderRadius: '15px', 
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '0px',
  }
  return(
    <div style={headerChatStyle}></div>
  )
}