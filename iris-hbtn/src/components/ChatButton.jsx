import chatLogo from '../assets/button1.png';
import propTypes from 'prop-types';

export const ChatButton = ({toggleChat}) => {
    const buttonStyle = {
        position: 'fixed',
        bottom: '1%',
        right: '1%',
        cursor: 'pointer',
        width: '4%',
        minWidth: '65px',
        transition: 'all 0.3s ease',
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