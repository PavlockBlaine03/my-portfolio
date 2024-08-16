import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AboutMeApp from './aboutmeApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutMeApp />
  </StrictMode>,
)