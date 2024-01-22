import React from 'react'
import './features.css'
import Featurebanner from './featurebanner'
import Featureslide from './featureslide'
import Featureslowbanner from './featureslowbanner'

const Features = () => {
  return (
    <div className='features'>
      <Featurebanner />
      <Featureslide />
      <Featureslowbanner />
    </div>
  )
}

export default Features