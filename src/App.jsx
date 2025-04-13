import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Brand from './components/brands'
import Service from './components/service'
import Banner from './components/banner'
import Banner2 from './components/nxtbanner'
import News from './components/newsletter'
import Testi from './components/testi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brand/>
      <Service/>
      <Banner/>
      <Banner2/>
      <News/>
      <Testi/>
    </div>
  )
}

export default App
