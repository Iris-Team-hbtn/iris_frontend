import BlueTick from '../assets/blue-tick.png';
import propTypes from 'prop-types';
import CerrarButton from './CerrarButton'

export const ConfirmationPopUp = ({ setShowPopUp, openConfirmation }) => {
  const ConfPopUpStyle = {
    backgroundColor: 'white',
    color: 'black',
    width: '20vw',
    minWidth: '350px',
    height: '20vh',
    minHeight: '150px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    paddingBottom: '2vh',
    borderRadius: '3%',
    border: '1px solid rgb(155, 154, 154)',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.7)',
    zIndex: 9999,  // Ensure it appears above other elements

    // Flexbox properties to stack elements vertically
    display: 'flex',
    flexDirection: 'column',  // Stack elements vertically
    justifyContent: 'space-evenly',  // Even spacing between items
    alignItems: 'center',     // Horizontally center the items
  };

  // Handle confirmation: Close both popups when confirmed
  const handleConfirm = () => {
    openConfirmation(false); // Close the ConfirmationPopUp
    setShowPopUp(false);     // Close the InputPopUp
  };

  return (
    <div style={ConfPopUpStyle}>
      <h2 style={{ color: 'black' }}>Consulta Agendada!</h2>
      <img src={BlueTick} alt='ConfirmationTick' style={{width:'20%'}}/>
      <CerrarButton handleConfirm={handleConfirm}/>
    </div>
  );
};

ConfirmationPopUp.propTypes = {
  setShowPopUp: propTypes.func.isRequired,
  openConfirmation: propTypes.func.isRequired
}