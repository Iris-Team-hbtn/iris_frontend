import { useState } from 'react';
import propTypes from 'prop-types'

export const ChatBubble_input = ({ addmessage }) => {
    const ChatBubbleStyle = {
      width: '95%',
      minWidth: '317px',
      height: '30px',
      backgroundColor: 'lightgrey',
      borderRadius: '15px',
      borderBottomRightRadius: '0px',
      display: 'flex',
      alignItems: 'center',
    }

    const [input_text, setInput_Text] = useState('')
    
    const onSubmit = (event) => {
      event.preventDefault()
      addmessage(input_text)
      setInput_Text('')
    }

    const onInputChange = (event) => {
      setInput_Text(event.target.value)
    }

    return (
      <form onSubmit={onSubmit}>
        <input 
        style={ChatBubbleStyle} 
        type="text"
        value={input_text}
        onChange={onInputChange}/>
      </form>
    )
  }

  ChatBubble_input.propTypes = {
    addmessage : propTypes.func.isRequired
  }