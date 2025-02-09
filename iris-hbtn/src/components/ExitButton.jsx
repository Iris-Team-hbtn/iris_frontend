import XLogo from '../assets/X.png';
import propTypes from 'prop-types';

export const ExitButton = ({toggleChat}) => {
  const XStyle = {
    position: 'fixed',
    bottom: '83.5%',
    right: '5.2%',
    cursor: 'pointer',
    width: '2.5%',
    minWidth: '42px',
    transition: 'all 0.3s ease',
  };
  return (
    <>
      <img src={XLogo} onClick={toggleChat} alt="XButton" style={XStyle} />
    </>
  )
};

ExitButton.propTypes = { 
    toggleChat : propTypes.func.isRequired
}