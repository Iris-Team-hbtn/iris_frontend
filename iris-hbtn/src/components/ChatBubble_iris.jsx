import PropTypes from 'prop-types'

export const ChatBubble_iris = ({ message }) => {
  const ChatBubble_irisStyle= {
        width: '95%',
        minWidth: '317px',
        height: '10px',
        backgroundColor: '#badf76',
        margin: '10px',
        borderRadius: '15px',
        borderBottomLeftRadius: '0px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
  }
    return (
    <div style= {ChatBubble_irisStyle} >Iris: {message}</div>
  )
}

ChatBubble_iris.propTypes = {
    message: PropTypes.string.isRequired
}