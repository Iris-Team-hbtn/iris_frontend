import chatLogo from '../assets/button1.png';
import propTypes from 'prop-types';

export const ChatButton = ({toggleChat}) => {
    const buttonStyle = {
        position: 'fixed',
        bottom: '2%',
        right: '1%',
        cursor: 'pointer',
        width: '4%',
        minWidth: '45px',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.7)',
    };
    const hoverStyle = {
        boxShadow: '5px 5px 30px rgba(0, 0, 0, 0.91)',
    }
    return (
        <>
            <img src={chatLogo} alt="ChatButton" style={buttonStyle} 
            onClick={toggleChat}
            onMouseEnter={(e) => e.target.style.boxShadow = hoverStyle.boxShadow}
            onMouseLeave={(e) => e.target.style.boxShadow = buttonStyle.boxShadow}
            />
        </>
    );
};

ChatButton.propTypes = { 
    toggleChat : propTypes.func.isRequired
}