import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChatButton} from './counterApp'
import './styles/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatButton/>
  </StrictMode>,
)
