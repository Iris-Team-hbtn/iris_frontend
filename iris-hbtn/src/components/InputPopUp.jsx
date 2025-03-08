import { ConfirmationPopUp } from './ConfirmationPopUp';
import { useState } from 'react';
import propTypes from 'prop-types';
import Input from './Inputs';
import ConfirmationButton from './ConfirmationButton';
import { FailPopUp } from './FailPopUp';
import { Loader } from './loadingspinny';

export const InputPopUp = ({ setShowPopUp, selectedEvent }) => {
  const PopUpStyle = {
    backgroundColor: 'white',
    color: 'black',
    width: '15vw',
    minWidth: '250px',
    height: '30vh',
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
    alignItems: 'center',
  };

  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [name_, setName] = useState(''); // Store 'name_' input
  const [email, setEmail] = useState(''); // Store 'email' input
  const [isSuccess, setIsSuccess] = useState(null); // Track if the request was successful
  const [loading, setLoading] = useState(false);

  const openingConfirmation = () => {
    setOpenConfirmation(true);
  };

  const handleSubmit = async () => {
    const formData = {
      'fullname': name_,
      'month': Number(selectedEvent.slice(5, 7)),
      'day': Number(selectedEvent.slice(8, 10)),
      'starttime': Number(selectedEvent.slice(11, 13)),
      'email': email,
      'year': Number(selectedEvent.slice(0, 4)),
    };
    const API_URL = 'http://localhost:5000/iris/appointments';
    console.log(formData);

    try {
      setLoading(true);
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Set success state if the request was successful
        setIsSuccess(true);
        console.log('Data successfully submitted!');
      } else {
        // Set fail state if the request failed
        setIsSuccess(false);
        console.error('Error submitting data:', response.statusText);
      }
    } catch (error) {
      // Set fail state if there was a network error
      setIsSuccess(false);
      console.error('Network error:', error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={PopUpStyle}>
        <div>
          <h1 style={{ color: 'black', fontSize: '30' }}>Horario Seleccionado:</h1>
          <div>{selectedEvent}</div>
        </div>
        <Input input_value={"Nombre"} type={'text'} value={name_} onChange={(n) => setName(n.target.value)} />
        <Input input_value={"E-mail"} type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <ConfirmationButton 
          handleSubmit={handleSubmit} 
          openingConfirmation={openingConfirmation} 
          disabled={name_.trim() === '' || email.trim() === ''} // Disable button if fields are empty
        />
      </div>
      {/* Conditionally render pop-up based on API request result */}
      {loading === true && <div style={{position: 'absolute',
                                        backgroundColor: 'white',
                                        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.7)',
                                        top: '50%', 
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        display: 'flex', 
                                        justifyContent: 'center', 
                                        alignItems: 'center',
                                        border: '1px solid rgb(155, 154, 154)',
                                        borderRadius: '3%',
                                        width: '20vw',
                                        minWidth: '350px',
                                        height: '22vh',
                                        minHeight: '150px',
                                        zIndex: 9999,
                                        }}><Loader/></div>}
      {isSuccess === true && <ConfirmationPopUp setShowPopUp={setShowPopUp} openConfirmation={setOpenConfirmation} />}
      {isSuccess === false && <FailPopUp setShowPopUp={setShowPopUp} openConfirmation={setOpenConfirmation} />}
    </>
  );
};

InputPopUp.propTypes = {
  setShowPopUp: propTypes.func.isRequired,
  selectedEvent: propTypes.string.isRequired,
};
