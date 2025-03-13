import { useState } from 'react';

export const AgendateButton = ({toggleCalendar}) => {
    const [isHovered, setIsHovered] = useState(false);
    const AgendateStyle = {
      backgroundColor: isHovered ? 'rgb(36, 104, 150)' : '#1f3685',
      color: 'white',
      height: '90%',
      width: '200px',               
      marginLeft: '5px',
      borderRadius: '30px',
      border: '1px solid rgb(255, 255, 255)',
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
        <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 24 24" height={24} fill="none" className="svg-icon"><g strokeWidth={2} strokeLinecap="round" stroke="#fff"><rect y={5} x={4} width={16} rx={2} height={16} /><path d="m8 3v4" /><path d="m16 3v4" /><path d="m4 11h16" /></g></svg>
            <p style={{marginLeft:'5px'}}>Agendate!</p>
        </button>
    )
}
