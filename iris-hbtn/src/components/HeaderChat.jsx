import { ExitButton } from "./ExitButton"
import propTypes from 'prop-types'

export const HeaderChat = ({toggleChat}) => {
  const headerChatStyle = {
    width: '100%',
    minWidth: '352px',
    height: '6.1%',
    backgroundColor: '#000000',
    borderRadius: '15px',
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '0px',
  }

  return (
    <div style={headerChatStyle}>
      <ExitButton toggleChat={toggleChat}/>
    </div>
  )
}
  
HeaderChat.propTypes = { 
  toggleChat : propTypes.func.isRequired
}