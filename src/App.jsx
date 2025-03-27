import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Brand from './components/brands'
import Service from './components/service'
import Banner from './components/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brand/>
      <Service/>
      <Banner/>
    </div>
  )
}

export default App
