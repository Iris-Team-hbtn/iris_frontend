import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // For month view
import timeGridPlugin from "@fullcalendar/timegrid"; // For week view

function Calendar() {
  const [nextDates, setNextDates] = useState([]); // State to store the next two weeks of dates
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([])

  useEffect(() => {
      // Function to get next two weeks of dates
      const getNextTwoWeeks = () => {
          const currentDate = new Date(); // Get the current date
          const nextTwoWeeks = [];

          // Loop through the next 14 days
          for (let i = 0; i < 15; i++) {
              const newDate = new Date(currentDate);
              newDate.setDate(currentDate.getDate() + i);
              const year = newDate.getFullYear();
              const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
              const day = String(newDate.getDate()).padStart(2, '0'); // Add leading zero if needed
              const formattedDate = `${year}-${month}-${day}T00:00`; // Use '00:00' as the time for now
              nextTwoWeeks.push({ date : formattedDate }); // Add the date to the array in readable format
          }

          return nextTwoWeeks;
      }

      setNextDates(getNextTwoWeeks());
  }, []);

  useEffect(() => {console.log(nextDates);}, [nextDates]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("src/events.json");
        const data = await response.json(); // Convert the response to a JSON object
        setEvents(data.events); // Assuming the fetched data has a property 'events'
      } catch (error) {
        console.error("Error fetching events:", error); // Handle any errors during fetch
      }
    };
    fetchEvents(); // Call the fetch function to get events
  }, []); // This effect runs only once after the component mounts

  useEffect(() => {
    console.log(events); // Optional: Log the events for debugging
  }, [events]);

  const fullcalendar = nextDates.map(day => {
    const hourlySlots = []; // Array to store the hourly slots for each day
    
    // Loop through hours from 11 to 18 (8 hours)
    for (let i = 11; i < 19; i++) {
        const year = day.date.split('-')[0]; // Get the year from the ISO date
        const month = day.date.split('-')[1]; // Get the month from the ISO date
        const dayOfMonth = day.date.split('-')[2].split('T')[0]; // Get the day from the ISO date
        
        // Format the hour (pad with leading zero for single digits)
        const hour = String(i).padStart(2, '0');
        
        // Create the ISO-formatted date string for this hour
        const isoDate = `${year}-${month}-${dayOfMonth}T${hour}:00`;
        
        hourlySlots.push({ date: isoDate }); // Add the hourly slot to the array
    }
    
    return hourlySlots; // Return the hourly slots for the current day
  }).flat(); // Flatten the array of arrays into one array
  const filteredArray = fullcalendar.filter(bigItem => 
    !events.some(smallItem => smallItem.date === bigItem.date)
  );
  return (
    <div>
      <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          events={filteredArray} // Combine fetched events with generated hourly slots
          locale="es" // Set the locale to Spanish
          headerToolbar={{ right: 'prev,next', center: 'title', left: '' }}
          allDaySlot={false} // Removes the "All-day" slot
          slotMinTime="11:00:00" // Earliest time shown is 11:00 AM
          slotMaxTime="19:00:00" // Latest time shown is 7:00 PM
          slotLabelInterval="00:30" // Show a time label every 30 minutes
          slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
          contentHeight="auto"
          height="80vh" // Adjust the calendar height
          slotDuration="01:00:00" // This will adjust how long each time slot is
          hiddenDays={[0]} // hides day 0, Sunday
          themeSystem="bootstrap" // Optional: Use FullCalendar's built-in themes
      />
    </div>
  );
}

export default Calendar;
