import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter,Routes,Route } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<App />}/>
   <Route path="HomePage" element={<HomePage />}/>

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
