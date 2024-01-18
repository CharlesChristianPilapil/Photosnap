import React from 'react'
import HomeGrid from './HomeGrid'
import HomeFeatures from './HomeFeatures'

import './home.css'

const Home = () => {
  return (
    <div id='home' className='container'>
       <HomeGrid />
       <HomeFeatures />
    </div>
  )
}

export default Home