import { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";  // For month view
import timeGridPlugin from "@fullcalendar/timegrid";  // For week view

function Calendar() {
    const calendarRef = useRef(null);

    useEffect(() => {
        // Optional: Perform any additional actions when the calendar is mounted (like fetching events)
    }, []);

  return (
    <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin]} // Add both dayGrid and timeGrid plugins
        initialView="timeGridWeek" // Set the default view to "Week"
        events={[
            { title: 'terminar agenda', start: '2025-02-17', end: '2025-02-21' },
            { date: '2025-02-20T14:00'},
            { date: '2025-02-21T14:00'}
        ]}
        locale="es" // Set the locale to Spanish
        headerToolbar={{ right: 'prev,next', center: 'title', left: '' }}
        allDaySlot={false} // Removes the "All-day" slot
        slotMinTime="11:00:00" // Earliest time shown is 8:00 AM
        slotMaxTime="19:00:00" // Earliest time shown is 8:00 AM
        slotLabelInterval="00:30" // Show a time label every 1 hour
        slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
        contentHeight="auto"
        height="80vh" // Adjust the calendar heigh
        slotDuration="01:00:00" // This will adjust how long each time slot is
        hiddenDays={[0]} // hides day 0, sunday
        themeSystem="bootstrap" // Optional: Use FullCalendar's built-in themes
    />
  )
}

export default Calendar