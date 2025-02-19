export const ConfirmationPopUp = ({ setShowPopUp, openConfirmation }) => {
    const ConfPopUpStyle = {
      backgroundColor: 'rgb(247, 247, 247)',
      color: 'black',
      width: '30vw',
      minWidth: '350px',
      height: '20vh',
      minHeight: '250px',
      position: 'fixed',
      top: '55%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden',
      padding: '2vw',
      border: '1px solid rgb(155, 154, 154)',
      boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.7)',
      zIndex: 9999,  // Ensure it appears above other elements
    };
  
    // Handle confirmation: Close both popups when confirmed
    const handleConfirm = () => {
      openConfirmation(false); // Close the ConfirmationPopUp
      setShowPopUp(false); // Close the InputPopUp
    };
  
    return (
      <div style={ConfPopUpStyle}>
        <h1 style={{ color: 'black' }}>Confirmar Consulta?</h1>
        <button onClick={handleConfirm}>Cerrar</button>
        <button onClick={() => openConfirmation(false)}>Cancelar</button>
      </div>
    );
  };
  