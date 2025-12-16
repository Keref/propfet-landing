import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyTrade from './components/WhyTrade'
import Plans from './components/Plans'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Demo from './components/Demo'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/" element={
          <div className="App">
            <Navbar />
            <Hero />
            {/*<WhyTrade />
            <Plans />
            <FAQ />
            <Footer />*/}
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App

