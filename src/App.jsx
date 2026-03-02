import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes,Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    
      <>
      <nav className=" text-blue-500 flex gap-10 justify-center ">

          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
</>
  
  )
}

export default App
