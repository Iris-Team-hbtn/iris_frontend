import XLogo from '../assets/cross-white.png';
import propTypes from 'prop-types';

export const ExitButton = ({toggleChat}) => {
  const XStyle = {
    cursor: 'pointer',
    width: '2%',
    minWidth: '35px',
    transition: 'all 0.3s ease',
    borderRadius: '50%',
    marginRight: '5px',
    boxShadow: 'inset 0 -4px 10px rgba(255, 255, 255, 0)'
  };
  const hover = {
    boxShadow: 'inset 0 -4px 20px rgba(255, 255, 255, 0.93)',
  }
  return (
    <>
      <img src={XLogo} onClick={toggleChat} 
      onMouseEnter={(a) => a.target.style.boxShadow = hover.boxShadow}
      onMouseLeave={(a) => a.target.style.boxShadow = XStyle.boxShadow}
      alt="XButton" style={XStyle} />
    </>
  )
};

ExitButton.propTypes = { 
    toggleChat : propTypes.func.isRequired
}