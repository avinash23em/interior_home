import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Brand from './components/brands'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brand/>
    </div>
  )
}

export default App
