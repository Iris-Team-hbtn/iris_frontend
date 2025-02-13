import PropTypes from 'prop-types'

export const ChatBubble_iris = ({ message }) => {
  const ChatBubble_irisStyle= {
        color: 'black',
        maxWidth: '92%',
        backgroundColor: 'rgb(218, 218, 218)',
        letterSpacing: '0.5px',
        margin: '10px',
        borderRadius: '15px',
        borderBottomLeftRadius: '0px',
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
    <div style= {ChatBubble_irisStyle} >{message}</div>
  )
}

ChatBubble_iris.propTypes = {
    message: PropTypes.string.isRequired
}