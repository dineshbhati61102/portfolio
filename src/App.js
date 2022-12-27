import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Award from './Components/Award'
import Contact from './Components/Contact';
import Skills from './Components/Skills';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/award' element={<Award/>} />
        <Route path='/contact' element={<Contact/>} />
        
        
         
         
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;