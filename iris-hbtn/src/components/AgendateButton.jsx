import { useState } from 'react';

export const AgendateButton = ({toggleCalendar}) => {
    const [isHovered, setIsHovered] = useState(false);
    const AgendateStyle = {
      backgroundColor: '#1f3685',
      color: 'white',
      height: '90%',
      width: '200px',               
      marginLeft: '5px',
      borderRadius: '30px',
      border: '1px solid rgb(255, 255, 255)',
      boxShadow: isHovered ? 'inset 0 -5px 15px rgba(255, 255, 255, 0.93)' : 'inset 0 0px 0px rgba(255, 255, 255, 0.3)',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center',  // This centers the text inside the button
      padding: '12px',
      display: 'flex',         // Add flexbox to make the button a flex container
      justifyContent: 'center',  // Horizontally center the text
      alignItems: 'center',      // Vertically center the text
    }

    return (
        <button
            style={AgendateStyle}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            onTouchStart={() => setIsHovered(true)}  // Handle touchstart for mobile devices
            onTouchEnd={() => setIsHovered(false)}   // Handle touchend for mobile devices
            onClick={toggleCalendar}
        >
            Agendate!
        </button>
    )
}
