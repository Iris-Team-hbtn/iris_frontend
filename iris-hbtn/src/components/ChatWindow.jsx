import { HeaderChat } from './HeaderChat'
import { ChatBubble_input } from './ChatBubble_input'
import { ChatContainer } from './ChatContainer';
import { useState } from 'react';
import propTypes from 'prop-types';

export const ChatWindow = ({ toggleChat, display }) => {
  const rectangleStyle = {
    display: display,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '40%',
    minWidth: '350px',
    maxwidth: '100%',
    height: '80%',
    backgroundColor: '#F5F5F5',
    position: 'fixed',
    bottom: '9%',
    right: '5%',
    border: '1px solidrgb(37, 37, 37)',
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
    const API_URL = 'http://127.0.0.1:5000/iris/chat'
    const OptsPost = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({ "query": message })
      }
      try{
        const response = await fetch(API_URL, OptsPost);
        const data = response.json()
        return data
        } 
    catch (error) {
      console.error(error)
}
  }
const onAddHumanMessage = (val) => {

    const newmessage = {
      user: 'Human',
      message: val
      }
  setMessages([...messages, newmessage])
  let irisresponse = fetchIris(val)
  const irismessage = {
    user: 'Iris',
    message: irisresponse.data
  }
  console.log(irismessage)
  setMessages([...messages, irismessage])
  }
  return (
    <div style={rectangleStyle}>
      <HeaderChat toggleChat={toggleChat} />
      <ChatContainer msg_list={messages} />
      <ChatBubble_input addmessage={onAddHumanMessage} />
    </div>
  );
}
ChatWindow.propTypes = {
  toggleChat: propTypes.func.isRequired,
  display: propTypes.string.isRequired,
  }