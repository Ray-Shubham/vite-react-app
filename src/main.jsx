import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CustomList from './components/list.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CustomList></CustomList>
  </StrictMode>,
)