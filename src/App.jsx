import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar/navbar';
import Footer from './components/footer/footer';
import Home from './components/pages/home/home';
import Stories from './components/pages/stories/stories';
import Features from './components/pages/features/features';
import Pricing from './components/pages/pricing/pricing';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Stories' element={<Stories />} />
        <Route path='/Features' element={<Features />} />
        <Route path='/Pricing' element={<Pricing />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App