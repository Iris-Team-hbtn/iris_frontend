import { ConfirmationPopUp } from './ConfirmationPopUp';
import { useState } from 'react';

export const InputPopUp = ({ setShowPopUp, selectedEvent }) => {
  const PopUpStyle = {
    backgroundColor: 'rgb(247, 247, 247)',
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
    border: '1px solid rgb(155, 154, 154)',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.7)',
    zIndex: 9900,  // Ensures it appears above other elements
  };

  if (!selectedEvent) {
    return <div>No event selected</div>;
  }

  const { start } = selectedEvent;
  const [openConfirmation, setOpenConfirmation] = useState(false); // Renamed to lowercase `openConfirmation`

  const openingConfirmation = () => { // Renamed to camelCase
    setOpenConfirmation(true);
  };

  return (
    <>
      <div style={PopUpStyle}>
        <div>
          <h2>Horario Seleccionado:</h2>
          <div>{start ? start.toString() : 'No start time available'}</div>
        </div>
        <div>
          <h2>Nombre:</h2>
          <input />
        </div>
        <div>
          <h2>Email:</h2>
          <input />
        </div>
        <button onClick={openingConfirmation}>Confirmar</button>
      </div>
      {openConfirmation && (
        <ConfirmationPopUp setShowPopUp={setShowPopUp} openConfirmation={setOpenConfirmation} />
      )}
    </>
  );
};
