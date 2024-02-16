import React from 'react'

import { Helmet } from 'react-helmet'

import './premium-plans.css'

const PremiumPlans = (props) => {
  return (
    <div className="premium-plans-container">
      <Helmet>
        <title>premium-plans - Character NFT template</title>
        <meta
          property="og:title"
          content="premium-plans - Character NFT template"
        />
      </Helmet>
    </div>
  )
}

export default PremiumPlans
