import React from 'react'
import './Links.scss'
import { links } from '../header/links'

function Links() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerSocial">
          {links.map((link) => (
            <a href={link.src} className="socialLink" rel='noreferrer' target="_blank" key={link.alt}><img src={link.icon} alt={link.alt} /></a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Links
