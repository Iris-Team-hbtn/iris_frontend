export const AgendateButtonHeader = () => {
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
        borderLeft: '1px solid rgb(160, 160, 160)',
        borderRight: '1px solid rgb(160, 160, 160)'
    }

    const AgendateStyleHover = {
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
    }

    const AgendateStyleDown = {
        backgroundColor: 'white',
    }

    return (
        <button
            style={AgendateStyle} 
            onMouseEnter={(e) => e.target.style.backgroundColor = AgendateStyleHover.backgroundColor} 
            onMouseLeave={(e) => e.target.style.backgroundColor = AgendateStyle.backgroundColor}
            onMouseDown={(e) => e.target.style.backgroundColor = AgendateStyleDown.backgroundColor}
            onMouseUp={(e) => e.target.style.backgroundColor = AgendateStyleHover.backgroundColor} 
        >
            Agendate!
        </button>
    )
}
