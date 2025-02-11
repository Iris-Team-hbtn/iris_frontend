import PropTypes from 'prop-types'

export const ChatBubble_iris = ({ message }) => {
  const ChatBubble_irisStyle= {
        color: 'white',
        maxWidth: '92%',
        minWidth: '310px',
        backgroundColor: '#414F6A',
        margin: '10px',
        borderRadius: '15px',
        borderBottomLeftRadius: '0px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        border: '1px solid rgb(37, 37, 37)',
        wordWrap: 'break-word',
        lineHeight: '1',
        wordBreak: 'break-word',
        
  }
    return (
    <div style= {ChatBubble_irisStyle} >Iris: {message}</div>
  )
}

ChatBubble_iris.propTypes = {
    message: PropTypes.string.isRequired
}