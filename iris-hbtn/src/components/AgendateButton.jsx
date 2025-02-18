export const AgendateButton = ({toggleCalendar}) => {
    const AgendateStyle = {
        backgroundColor: '#1f3685',
        color: 'white',
        height: '90%',
        width: '200px',               
        marginLeft: '5px',
        borderRadius: '30px',
        border: '1px solid rgb(201, 201, 201)',
        boxShadow: 'inset 0 -4px 10px rgba(255, 255, 255, 0.3)',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'inline-block',
        textAlign: 'center',
        padding: '12px',
    }

    const AgendateStyleHover = {
        boxShadow: 'inset 0 -4px 20px rgba(255, 255, 255, 0.93)',
    }

    return (
        <button
            style={AgendateStyle} 
            onMouseEnter={(e) => e.target.style.boxShadow = AgendateStyleHover.boxShadow} 
            onMouseLeave={(e) => e.target.style.boxShadow = AgendateStyle.boxShadow}
            onClick={toggleCalendar}
        >
            Agendate!
        </button>
    )
}
