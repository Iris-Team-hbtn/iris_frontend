import { ExitButton } from "./ExitButton"
import propTypes from 'prop-types'
import { AgendateButton } from "./AgendateButton"

export const HeaderChat = ({toggleChat}) => {
  const headerChatStyle = {
    width: '100%',
    minWidth: '352px',
    height: '6.8%',
    backgroundColor: '#1f3685',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '15px',
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '0px',
  }

  return (
    <div style={headerChatStyle}>
      <AgendateButton/>
      <ExitButton toggleChat={toggleChat}/>
    </div>
  )
}
  
HeaderChat.propTypes = { 
  toggleChat : propTypes.func.isRequired
}