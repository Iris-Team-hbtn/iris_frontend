import Calendar from "./Calendar";
import propTypes from 'prop-types'

export const CalendarDiv = ({ isOpen }) => {

    const calendarDivStyle = {
        backgroundColor: 'rgb(247, 247, 247)',
        width: '70vw',
        minWidth: '350px',
        height: '60vh',
        minHeight: '350px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden', 
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
CalendarDiv.propTypes = {
  isOpen: propTypes.bool.isRequired,
}