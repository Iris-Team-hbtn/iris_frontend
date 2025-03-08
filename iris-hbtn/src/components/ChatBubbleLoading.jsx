import { ChatLoader } from "./ChatLoader"

export const ChatBubble_Loading = () => {
    const ChatBubble_irisStyle= {
          color: 'black',
          maxWidth: '92%',
          backgroundColor: 'rgba(218, 218, 218, 0.65)',
          letterSpacing: '1px',
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
      <div style= {ChatBubble_irisStyle} ><ChatLoader/></div>
    )
  }