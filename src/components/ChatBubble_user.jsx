import PropTypes from 'prop-types'

export const ChatBubble_user = ({ message }) => {
  const ChatBubble_userStyle= {
        maxWidth: '92%',
        color: 'black',
        backgroundColor: '#becef1',
        margin: '10px',
        borderRadius: '15px',
        borderBottomRightRadius: '0px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        border: '1px solid rgb(160, 160, 160)',
        wordWrap: 'break-word',
        lineHeight: '1',
        wordBreak: 'break-word',
  }
    return (
    <div style= {ChatBubble_userStyle} >{message}</div>
  )
}


ChatBubble_user.propTypes = {
    message: PropTypes.string.isRequired
}