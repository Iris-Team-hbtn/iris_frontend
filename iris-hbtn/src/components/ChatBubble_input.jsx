import { useState } from 'react';
import propTypes from 'prop-types'

export const ChatBubble_input = ({ addmessage }) => {
    const ChatBubbleStyle = {
      width: '95%',
      minWidth: '320px',
      height: '30px',
      backgroundColor: '#FFFFFF',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center', 
      margin: '5px',
      border: '1px solid rgb(160, 160, 160)',
      paddingLeft: '10px',
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
        placeholder='Escribe algo...'
        onChange={onInputChange}/>
      </form>
    )
  }

  ChatBubble_input.propTypes = {
    addmessage : propTypes.func.isRequired
  }