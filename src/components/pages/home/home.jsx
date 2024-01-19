import React from 'react'
import HomeGrid from './HomeGrid'
import HomeFeatures from './HomeFeatures'
import Homeslide from './homeslide'

import './home.css'

const Home = () => {
  return (
    <div id='home'>
       <HomeGrid />
       <HomeFeatures />
       <Homeslide />
    </div>
  )
}

export default Home