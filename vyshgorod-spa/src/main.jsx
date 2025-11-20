import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import './styles/carousel.css'
import './styles/dropdown.css'
import './styles/feedback.css'
import './styles/main.css'
import './styles/napryamy.css'
import './styles/show.css'
import './styles/tooltip.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
