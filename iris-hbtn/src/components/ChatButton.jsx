import chatLogo from '../assets/button1.png';
import propTypes from 'prop-types';

export const ChatButton = ({toggleChat}) => {
    const buttonStyle = {
        position: 'fixed',
        bottom: '2%',
        right: '1%',
        cursor: 'pointer',
        width: '4%',
        minWidth: '50px',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.7)',
    };
    return (
        <>
            <img src={chatLogo} onClick={toggleChat} alt="ChatButton" style={buttonStyle} />
        </>
    );
};

ChatButton.propTypes = { 
    toggleChat : propTypes.func.isRequired
}