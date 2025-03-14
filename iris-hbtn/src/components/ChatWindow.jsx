import { HeaderChat } from './HeaderChat';
import { ChatBubble_input } from './ChatBubble_input';
import { ChatContainer } from './ChatContainer';
import { useState } from 'react';
import propTypes from 'prop-types';
import { CalendarDiv } from './CalendarDiv';
import { useSpring, animated } from 'react-spring';

export const ChatWindow = ({ toggleCalendar, toggleChat, display, isOpen }) => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      user: 'Iris',
      message: 'Soy Iris, una asistente virtual destinada a ayudarte.',
    },
  ]);

  const fetchIris = async (message) => {
    const API_URL = 'https://34.44.177.109.nip.io:5000/iris/chat';
    const OptsPost = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: message }),
    };
    try {
      const response = await fetch(API_URL, OptsPost);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return '';
    }
  };

  const onAddHumanMessage = async (val) => {
    setLoading(true);
    const newMessage = {
      user: 'Human',
      message: val,
    };
    setMessages([...messages, newMessage]);

    let irisResponse = await fetchIris(val);
    const irisMessage = {
      user: 'Iris',
      message: irisResponse.response,
    };
    setLoading(false);
    setMessages([...messages, newMessage, irisMessage]);
    console.log(irisMessage);
  };

  // Use react-spring to animate the visibility and movement of the chat window
  const chatWindowAnimation = useSpring({
    opacity: display === 'none' ? 0 : 1, // Fade in and out
    transform: display === 'none' ? 'translateY(50px)' : 'translateY(0)', // Slide up and down
    config: { tension: 250, friction: 20 }, // Adjust smoothness
  });

  return (
    <animated.div
      style={{
        ...chatWindowAnimation, // Apply animation styles
        position: 'fixed',
        bottom: '9%',
        right: '5%',
        width: '40%',
        minWidth: '350px',
        maxWidth: '90%',
        height: '80%',
        backgroundColor: 'white',
        border: '1px solid rgb(155, 154, 154)',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.7)',
        borderRadius: '15px',
        borderBottomRightRadius: '0px',
        display: display,
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <HeaderChat toggleCalendar={toggleCalendar} toggleChat={toggleChat} />
      <ChatContainer msg_list={messages} loading={loading}/>
      <ChatBubble_input addmessage={onAddHumanMessage} />
      <CalendarDiv isOpen={isOpen} />
    </animated.div>
  );
};

ChatWindow.propTypes = {
  toggleChat: propTypes.func.isRequired,
  display: propTypes.string.isRequired,
  toggleCalendar: propTypes.func.isRequired,
};
