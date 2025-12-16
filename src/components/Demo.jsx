import React from 'react'
import './Demo.css'
import landingPageImage from '../landing-page.png'

const Demo = () => {
  return (
    <div className="demo-page">
      <div className="demo-container">
        <img 
          src={landingPageImage} 
          alt="Landing Page Demo" 
          className="demo-image"
        />
      </div>
    </div>
  )
}

export default Demo

