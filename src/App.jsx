import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Skills from './Component/Skills'
import Contact from './Component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < Navbar/>
        <About/>
        <Skills/>
        <Contact/>
      
      </div>
    </>
  )
}

export default App
