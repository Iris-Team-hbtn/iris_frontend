export const AgendateButton = () => {
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
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
    }

    return (
        <button
            style={AgendateStyle} 
            onMouseEnter={(e) => e.target.style.backgroundColor = AgendateStyleHover.backgroundColor} 
            onMouseLeave={(e) => e.target.style.backgroundColor = AgendateStyle.backgroundColor}
        >
            Agendate!
        </button>
    )
}
