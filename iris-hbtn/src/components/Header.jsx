import irisLogo from '../assets/iris_logo_white.png';

export const Header = () => {
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