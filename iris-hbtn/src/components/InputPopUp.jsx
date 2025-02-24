import { ConfirmationPopUp } from './ConfirmationPopUp';
import { useState } from 'react';
import propTypes from 'prop-types';
import Input from './Inputs';
import ConfirmationButton from './ConfirmationButton'

export const InputPopUp = ({ setShowPopUp, selectedEvent }) => {
  const PopUpStyle = {
    backgroundColor: 'white',
    color: 'black',
    width: '30vw',
    minWidth: '250px',
    height: '50vh',
    minHeight: '350px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    padding: '2vw',
    borderRadius: '3%',
    border: '1px solid rgb(155, 154, 154)',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.7)',
    zIndex: 9900,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  };
  const { start } = selectedEvent;
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const openingConfirmation = () => {
    setOpenConfirmation(true);
  };

  return (
    <>
      <div style={PopUpStyle}>
        <div>
          <h1 style={{color: 'black', fontSize: '30'}}>Horario Seleccionado:</h1>
          <div>{start ? start.toString() : 'No start time available'}</div>
        </div>
        <Input input_value={"Nombre"}/>
        <Input input_value={"E-mail"}/>
        <ConfirmationButton openingConfirmation={openingConfirmation}/>
      </div>
      {openConfirmation && (
        <ConfirmationPopUp setShowPopUp={setShowPopUp} openConfirmation={setOpenConfirmation} />
      )}
    </>
  );
};

InputPopUp.propTypes = {
  setShowPopUp: propTypes.func.isRequired,
  selectedEvent: propTypes.object.isRequired
}