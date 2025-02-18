import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Body } from './components/Body'
import './styles/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body />
  </StrictMode>,
)
