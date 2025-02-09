import { HeaderChat } from './HeaderChat'
import { ChatBubble_input } from './ChatBubble_input'
import { ChatContainer } from './ChatContainer';
import { useState } from 'react';
import propTypes from 'prop-types';

export const ChatWindow = ({toggleChat, display}) => {
    const rectangleStyle = {
        display: display,
        flexDirection: 'column',
        alignItems: 'center',
        width: '40%',
        minWidth: '350px',
        maxwidth: '100%',
        height: '80%',
        backgroundColor: '#F5F5F5',
        position: 'fixed',
        bottom: '9%',
        right: '5%',
        border: '1px solid #D3D3D3',
        borderRadius: '15px',
        borderBottomRightRadius: '0px',
        transition: 'all 0.3s ease',
      };

      const [messages, setMessages] = useState([
        {
        user: 'Iris',
        message: 'Hola! Soy Iris, una asistente virtual destinada a ayudarte.'
        }
      ])

      const onAddHumanMessage = (val) => {
        const newmessage = {
          user: 'Human',
          message: val
        }
        setMessages([...messages, newmessage])
      }
      return (
        <div style={rectangleStyle}>
          <HeaderChat toggleChat={toggleChat}/>
          <ChatContainer msg_list={messages}/>
          <ChatBubble_input addmessage={onAddHumanMessage}/>
        </div>
      );
}

ChatWindow.propTypes = { 
  toggleChat : propTypes.func.isRequired,
  display : propTypes.string.isRequired,
}