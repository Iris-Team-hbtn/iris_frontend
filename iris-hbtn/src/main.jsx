import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChatButton, Head1} from './components'
import './styles/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head1/>
    <div style={{height: '2000px'}}>
      <ChatButton/>
    </div>
  </StrictMode>,
)
