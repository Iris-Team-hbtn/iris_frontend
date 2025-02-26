import { HeaderChat } from './HeaderChat'
import { ChatBubble_input } from './ChatBubble_input'
import { ChatContainer } from './ChatContainer';
import { useState } from 'react';
import propTypes from 'prop-types';
import { CalendarDiv } from './CalendarDiv';

export const ChatWindow = ({ toggleCalendar, toggleChat, display, isOpen }) => {
  const rectangleStyle = {
    display: display,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '40%',
    minWidth: '350px',
    maxwidth: '90%',
    height: '80%',
    backgroundColor: 'white',
    position: 'fixed',
    bottom: '9%',
    right: '5%',
    border: '1px solid rgb(155, 154, 154)',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.7)',
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

  const fetchIris = async (message) => {
    const API_URL = 'http://localhost:5000/iris/chat'
    const OptsPost = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({ "query": message })
      }
      try{
        const response = await fetch(API_URL, OptsPost);
        const data = await response.json()
        return data
        } 
    catch (error) {
      console.error(error)
      return '';
}
  }
const onAddHumanMessage = async (val) => {

    const newmessage = {
      user: 'Human',
      message: val
      }
  setMessages([...messages, newmessage])

  let irisresponse = await fetchIris(val)
  const irismessage = {
    user: 'Iris',
    message: irisresponse.response
  }

  setMessages([...messages, newmessage, irismessage])
  console.log(irismessage)
  }
  return (
    <div style={rectangleStyle}>
      <HeaderChat toggleCalendar={toggleCalendar} toggleChat={toggleChat} />
      <ChatContainer msg_list={messages} />
      <ChatBubble_input addmessage={onAddHumanMessage} />
      <CalendarDiv isOpen={isOpen} />
    </div>
  );
}
ChatWindow.propTypes = {
  toggleChat: propTypes.func.isRequired,
  display: propTypes.string.isRequired,
  toggleCalendar: propTypes.func.isRequired
  }