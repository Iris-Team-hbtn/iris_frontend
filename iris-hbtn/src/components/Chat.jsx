import { useState } from 'react'
import { ChatButton } from './ChatButton';
import { ChatWindow } from './ChatWindow';

export const Chat = () => {
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
        <ChatWindow toggleChat={toggleChat} display={displayState} />
        <ChatButton toggleChat={toggleChat} />
    </>
  )
}

// Button mande informacion a Chat
// Chat con esa informacion actualice el estado
// Y con el estado cambiando, cambie la prop de Window