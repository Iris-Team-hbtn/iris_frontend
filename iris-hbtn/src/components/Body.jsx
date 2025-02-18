import { Header } from './Header'
import { Chat } from './Chat'
import { CalendarDiv } from './CalendarDiv'
import { useState } from 'react'

export function Body() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleCalendar = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
    <>
        <Header toggleCalendar={toggleCalendar}/>
        <CalendarDiv isOpen={isOpen} />    
        <Chat toggleCalendar={toggleCalendar}/>
    </>
  )
}
