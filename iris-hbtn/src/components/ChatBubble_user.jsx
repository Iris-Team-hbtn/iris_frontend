import PropTypes from 'prop-types'

export const ChatBubble_user = ({ message }) => {
  const ChatBubble_userStyle= {
        width: '92%',
        minWidth: '317px',
        height: '10px',
        backgroundColor: '#dbd48f',
        margin: '10px',
        borderRadius: '15px',
        borderBottomRightRadius: '0px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        border: '1px solid rgb(37, 37, 37)',
  }
    return (
    <div style= {ChatBubble_userStyle} >Tú: {message}</div>
  )
}


ChatBubble_user.propTypes = {
    message: PropTypes.string.isRequired
}