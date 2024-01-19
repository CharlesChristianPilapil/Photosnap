import React from 'react'
import Storiesbanner from './storiesbanner'
import Storiesfeature from './storiesfeature'
import './stories.css'

const Stories = () => {
  return (
    <div className='stories'>
      <Storiesbanner />
      <Storiesfeature />
    </div>
  )
}

export default Stories