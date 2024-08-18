import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import RTW from './routes/Rtwpage.jsx'
import Bespoke from './routes/Bespokepage.jsx'
// import Contact from './routes/Contact.jsx'
import Contact from './routes/Contactpage.jsx'
import About from './components/About.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  {/* <StrictMode> */}
    {/* <App /> */}
  {/* </StrictMode>, */}
 <Routes>
   <Route path='/' element={<App/>}/>
   <Route path='rtw' element={<RTW/>}/>
   <Route path='bespoke' element={<Bespoke/>}/>
   <Route path='contact' element={<Contact/>}/> 
   <Route path='About' element={<About/>}/>
 </Routes>
  </BrowserRouter>
)
