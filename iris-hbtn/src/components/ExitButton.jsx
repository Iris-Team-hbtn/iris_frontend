import XLogo from '../assets/cross-white.png';
import propTypes from 'prop-types';

export const ExitButton = ({toggleChat}) => {
  const XStyle = {
    cursor: 'pointer',
    width: '5%',
    backgroundColor: '',
    minWidth: '25px',
    transition: 'all 0.3s ease',
    borderRadius: '50%',
    marginRight: '5px',
  };
  const hover = {
    backgroundColor: 'rgb(36, 104, 150)',
  }
  return (
    <>
      <img src={XLogo} onClick={toggleChat} 
      onMouseEnter={(a) => a.target.style.backgroundColor = hover.backgroundColor}
      onMouseLeave={(a) => a.target.style.backgroundColor = XStyle.backgroundColor}
      alt="XButton" style={XStyle} />
    </>
  )
};

ExitButton.propTypes = { 
    toggleChat : propTypes.func.isRequired
}