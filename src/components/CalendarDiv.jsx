import Calendar from "./Calendar";
import propTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

export const CalendarDiv = ({ isOpen }) => {

    const calendarDivStyle = useSpring({
        backgroundColor: 'rgb(247, 247, 247)',
        width: '80%',
        minWidth: '352px',
        minHeight: '350px',
        position: 'absolute',
        top: '5.8%',
        left: '0%',
        overflow: 'hidden',
        borderRight: '0px solid rgb(255, 255, 255)',
        borderBottom: '2px solid rgb(248, 248, 248)',
        borderTop: 'none',
        borderLeft: '2px solid rgb(255, 255, 255)5',
        transform: 'translateY(0)',
        reset: true,
        opacity: 1,
        from: { transform: 'translateY(-5%)', opacity: 0.5 },
        config: { tension: 300, friction: 26 },
    });

    return (
        isOpen &&(
        <animated.div style={calendarDivStyle}>
            <Calendar/>
        </animated.div>
    ));
};
CalendarDiv.propTypes = {
  isOpen: propTypes.func.isRequired,
}