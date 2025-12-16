import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>PropFet</h2>
        </div>
        <div className="navbar-links">
          {/*<a href="#faq" className="navbar-link">FAQ</a>
          <a 
            href="https://app.plip.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="navbar-link login-link"
          >
            Login
          </a>*/}
          <a 
            href="https://x.com/propfet_" 
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link"
            aria-label="Follow us on Twitter"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

