import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Show a prediction edge
            <span className="hero-title-accent">Get funded</span>
          </h1>
          <p className="hero-subtitle">
            Get access to capital to leverage your edge on prediction markets.
          </p>
          <div className="hero-buttons">
            <a 
              href="https://t.me/propfet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Join Waitlist
            </a>
            <a 
              href="https://x.com/propfet_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-twitter"
              aria-label="Follow us on Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </a>
            {/*<a href="#plans" className="btn btn-secondary">
              View Plans
            </a>*/}
          </div>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  )
}

export default Hero

