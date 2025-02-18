import Calendar from "./Calendar";

export const CalendarDiv = ({ isOpen }) => {

    const calendarDivStyle = {
        backgroundColor: 'rgb(247, 247, 247)',
        width: '70vw',
        minWidth: '350px',
        height: '60vh', // Parent container height
        minHeight: '350px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden', // Prevent overflow from calendar
        padding: '1vw',
        border: '1px solid rgb(155, 154, 154)',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.7)',
    };

    return (
        isOpen &&(
        <div style={calendarDivStyle}>
            <Calendar/>
        </div>
    ));
};
