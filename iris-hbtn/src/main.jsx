import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChatButton, ChatBox, Head1} from './counterApp'
import './styles/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head1/>
    <div style={{height: '2000px'}}>
      <ChatBox/>
      <ChatButton/>
    </div>
  </StrictMode>,
)
