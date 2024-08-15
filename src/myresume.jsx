import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ResumeApp from './resumeApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResumeApp />
  </StrictMode>,
)