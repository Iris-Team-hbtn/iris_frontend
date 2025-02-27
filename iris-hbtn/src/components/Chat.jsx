import { useState } from 'react'
import { ChatButton } from './ChatButton';
import { ChatWindow } from './ChatWindow';

export const Chat = () => {
  const [displayState, setDisplayState] = useState('none')
  const [isOpen, setIsOpen] = useState(false)
    const toggleCalendar = () => {
        setIsOpen(prevState => !prevState);
    };

  const toggleChat = () => {
    if (displayState == 'none'){
      setDisplayState('flex')
    } else {
      setDisplayState('none')
    }
  }
  return (
    <>
        <ChatWindow toggleCalendar={toggleCalendar}toggleChat={toggleChat} isOpen={isOpen} display={displayState} />
        <ChatButton toggleChat={toggleChat} />
    </>
  )
}
