import { useState } from 'react';
import chatLogo from './assets/button1.png';
import irisLogo from './assets/iris_logo_white.png';
import XLogo from './assets/X.png';

export const ChatButton = () => {
  const buttonStyle = {
    position: 'fixed',      
    bottom: '1%',
    right: '1%',
    cursor: 'pointer',
    width: '4%',
    minWidth: '65px',
    transition: 'all 0.3s ease',
  };

    const [isChatOpen, SetChatBoxOn] =useState(false);
  
    const ToggleChatBox = () => {
      SetChatBoxOn((prev) => !prev)
    };
      return (
    <>
        <img src={chatLogo} onClick={ToggleChatBox} alt="ChatButton" style={ buttonStyle } />
        {isChatOpen && <ChatBox/>}
    </>
  );
};

const ExitButton = () => {
  const XStyle = {
    position: 'fixed',      
    bottom: '83.5%',
    right: '5.2%',
    cursor: 'pointer',
    width: '2.5%',
    minWidth: '42px',
    transition: 'all 0.3s ease',
  };
  const [isChatOff, SetChatBoxOff] =useState(false);

  const ExitChatBox = () => {
    SetChatBoxOff((prev) => !prev)
    };
  return(
    <>
      <img src={XLogo} onClick={ExitChatBox} alt="ChatButton" style={ XStyle } />
      {isChatOff && <ChatBox/>}
    </>
  )
};

export const Head1 = () => {
  const headerStyle = {
    backgroundColor: '#000000',
    width: '100%',
    height: '50px',
    position: 'fixed',
    top: '0',
    left: '0',
    color: 'white',
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
  };
  const headerTextStyle = {
    fontSize: '300%',
  };
  const irisLogoStyle = {
    width: '6%',
    minWidth: '80px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
  }
  return(
    <div style={headerStyle}>
      <img src={irisLogo} alt="ChatButton" style={irisLogoStyle}/>
      <h1 style={headerTextStyle}>Iris</h1>
    </div>
  );
};

export const ChatBox = () => {
  const rectangleStyle = {
    width: '40%',
    minWidth: '350px',
    maxwidth: '100%', 
    height: '80%',
    backgroundColor: '#F5F5F5',
    position: 'fixed',
    bottom: '9%',
    right: '5%',
    border: '1px solid #D3D3D3',
    borderRadius: '15px',
    borderBottomRightRadius: '0px',
    transition: 'all 0.3s ease',
  };
  return(
          <div style={rectangleStyle}>
            <HeaderChat/>
            <ExitButton/>
            <ChatBubble/>
          </div>
  );
}

const ChatBubble = () => {
  const ChatBubbleStyle = {
    width: '38%',
    minWidth: '317px',
    height: '10px',
    backgroundColor: 'grey',
    position: 'fixed',
    right: '4.7%',
    bottom: '8.7%',
    margin: '10px',
    borderRadius: '15px',
    borderBottomRightRadius: '0px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
  }
  return(
    <div style={ChatBubbleStyle}>Escribe algo...</div>
  )
}

const HeaderChat = () => {
  const headerChatStyle={
    width: '40.1%',
    minWidth: '352px',
    height: '6.1%',
    backgroundColor: '#000000',
    position: 'fixed',
    bottom: '83.2%',
    right: '5%',
    borderRadius: '15px',
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '0px',
  }
  return(
    <div style={headerChatStyle}></div>
  )
}
