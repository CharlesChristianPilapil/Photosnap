import React from 'react'
import Pricingbanner from './pricingbanner'
import Pricinglowbanner from './pricinglowbanner'
import Pricingsubscription from './pricingsubscription'
import Pricingtable from './pricingtable'
import './pricing.css'

const Pricing = () => {
  return (
    <div className='pricing'>
      <Pricingbanner />
      <Pricingsubscription />
      <Pricingtable />
      <Pricinglowbanner />
    </div>
  )
}

export default Pricing