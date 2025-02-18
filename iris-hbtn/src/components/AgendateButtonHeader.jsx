export const AgendateButtonHeader = ({toggleCalendar}) => {
    const AgendateStyle = {
        backgroundColor: '#1f3685',
        color: 'white',
        height: '100%',
        width: '200px',               
        marginLeft: '15px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'inline-block',
        textAlign: 'center',
        padding: '12px',
        borderRadius: '30px',
        borderLeft: '1px solid rgb(160, 160, 160)',
        borderRight: '1px solid rgb(160, 160, 160)',
        boxShadow: 'inset 0 -4px 10px rgba(255, 255, 255, 0.3)',
    }

    const AgendateStyleHover = {
        boxShadow: 'inset 0 -4px 10px rgba(255, 255, 255, 0.3)',
    }

    return (
        <>
            <button
                style={AgendateStyle} 
                onMouseEnter={(e) => e.target.style.boxShadow = AgendateStyleHover.boxShadow} 
                onMouseLeave={(e) => e.target.style.boxShadow = AgendateStyle.boxShadow}
                onClick={toggleCalendar}>
                Agendate!
            </button>
        </>
    )
}
