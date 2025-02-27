import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { InputPopUp } from "./InputPopUp";
import { Loader } from "./loadingspinny";

function Calendar() {
  const [nextDates, setNextDates] = useState([]); // State to store the next two weeks of dates
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([])
  const [showPopUp, setShowPopUp] = useState(false)
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {console.log("nextDates:",nextDates);}, [nextDates]);

  useEffect(() => {
    const fetchEvents = async () => {
      const API_URL_EVENTS = 'http://127.0.0.1:5000/iris/appointments';
      try {
        const response = await fetch(API_URL_EVENTS, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            credentials: 'include'
          }
        });
    
        if (!response.ok) {
          console.error(`API Request failed with status: ${response.status}`);
          throw new Error('Network response was not ok');
        }
    
        // Parse the JSON data
        const data = await response.json();
        console.log('Fetched data:', data);  // Log the response to confirm
    
        // Check if 'events' is an array and set it
        if (Array.isArray(data.events)) {
          setEvents(data.events);
        } else {
          console.error('Expected events to be an array:', data.events);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
        finally {
          setLoading(false);
        }
    };
    
    
    fetchEvents(); // Call the fetch function to get events
  }, []); // This effect runs only once after the component mounts

  useEffect(() => {
    console.log("eventos:", events); // Optional: Log the events for debugging
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
        const isoDate = `${year}-${month}-${dayOfMonth}T${hour}:00:00`;

        hourlySlots.push({ date: isoDate }); // Add the hourly slot to the array
    }

    return hourlySlots; // Return the hourly slots for the current day
  }).flat(); // Flatten the array of arrays into one array
  const filteredArray = fullcalendar.filter(bigItem => 
    !events.some(smallItem => smallItem.date === bigItem.date)
  );
  const [selectedEvent, setSelectedEvent] = useState(null)
  const handleClick = (info) => {
    const sele = () => {
      // Get the original Date object
      const eventDate = new Date(info.event.start);
  
      // Subtract 3 hours from it
      eventDate.setHours(eventDate.getHours() - 3);
  
      // Format it back to ISO string (without milliseconds and 'Z')
      const isoString = eventDate.toISOString().slice(0, 19);

      // Set the modified event date (in ISO format without milliseconds)
      return isoString;
    };
    setSelectedEvent(sele);
    setShowPopUp(prevState => !prevState);
  }
  console.log("selectedEvent:", selectedEvent)
  console.log("events:", events);
  /*console.log("fullcalendar:", fullcalendar);
    console.log("filteredArray:", filteredArray); */
    if (loading) {
      return <div style={{
              display: 'flex',
              justifyContent: 'center',  // Horizontally center
              alignItems: 'center',      // Vertically center
              height: '53vh'            // Take up the full height of the viewport
            }}>
                <Loader/>
             </div>
    }

  return (
    <div>
      <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          events={filteredArray} // Combine fetched events with generated hourly slots
          eventClick={handleClick}
          locale="es" // Set the locale to Spanish
          headerToolbar={{ right: 'prev,next', center: 'title', left: '' }}
          titleFormat={{ month: 'short', day: 'numeric',}}
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
      {showPopUp && <InputPopUp setShowPopUp={setShowPopUp} selectedEvent={selectedEvent} />}
    </div>
  );
}

export default Calendar;
