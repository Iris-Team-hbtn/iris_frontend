import { useState } from 'react';
import propTypes from 'prop-types'

export const ChatBubble_input = ({ addmessage }) => {
    const ChatBubbleStyle = {
      minWidth: '97%',
      height: '30px',
      backgroundColor: 'lightgrey',
      borderRadius: '15px',
      borderBottomRightRadius: '0px',
      display: 'flex',
      alignItems: 'center',
      margin: '3px'
    }

    const [input_text, setInput_Text] = useState('')
    
    const onSubmit = (event) => {
      event.preventDefault()
      if (input_text != ''){addmessage(input_text)}
      setInput_Text('')
    }

    const onInputChange = (event) => {
      setInput_Text(event.target.value)
    }

    return (
      <form style={{width: '99%'}}onSubmit={onSubmit}>
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