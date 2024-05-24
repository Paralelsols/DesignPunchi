import { useState } from 'react'
import './App.css'

//comps
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Roadmap from './components/roadmap/Roadmap'
import Tokenomics from './components/tokenomics/Tokenomics'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'

function App() {


  return (
    <>
    <Navbar />
    <Banner />
    <About />
    <Roadmap />
    <Tokenomics />
    <Faq />
    <Footer />
    </>
  )
}

export default App
