import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header'
import { Chat } from './components/Chat'
import './styles/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Chat />
  </StrictMode>,
)
