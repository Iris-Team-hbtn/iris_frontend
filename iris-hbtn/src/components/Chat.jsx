import { useState } from 'react'
import { ChatButton } from './ChatButton';
import { ChatWindow } from './ChatWindow';

export const Chat = ({toggleCalendar}) => {
  const [displayState, setDisplayState] = useState('none')

  const toggleChat = () => {
    if (displayState == 'none'){
      setDisplayState('flex')
    } else {
      setDisplayState('none')
    }
  }
  return (
    <>
        <ChatWindow toggleCalendar={toggleCalendar}toggleChat={toggleChat} display={displayState} />
        <ChatButton toggleChat={toggleChat} />
    </>
  )
}
