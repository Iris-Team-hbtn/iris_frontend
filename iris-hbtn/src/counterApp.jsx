import chatLogo from './assets/button1.png';
import irisLogo from './assets/iris_logo_white.png'

export const ChatButton = () => {

  const buttonStyle = {
    position: 'fixed',      
    bottom: '0.5%',         
    right: '0.2%',
    cursor: 'pointer',
    width: '6%',
    minWidth: '78px',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
  };

  return (
    <>
        <img src={chatLogo} alt="ChatButton" style={ buttonStyle } />
    </>
  );
};

export const Head1 = () => {
  const headerStyle = {
    backgroundColor: '#000000',
    width: '100%',
    height: '9%',
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
    padding: '10px',
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
    height: '80%',
    backgroundColor: '#F5F5F5',
    position: 'fixed',
    bottom: '9%',         
    right: '6%',
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

const HeaderChat = () => {
  const headerChatStyle={
    width: '40.1%',
    minWidth: '352px',
    height: '6.1%',
    backgroundColor: '#000000',
    position: 'fixed',
    bottom: '83.2%',
    right: '6%',
    borderRadius: '15px', 
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '0px',
  }
  return(
    <div style={headerChatStyle}></div>
  )
}
