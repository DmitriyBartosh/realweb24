import React, {useEffect, useState} from 'react'
import Media from 'react-media'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import Button from '../redButton/RedButton'
import { links, contacts } from './links'
import './Header.scss'

import Logo from '../logoReal/LogoReal'
const logoSrc = require('../../assets/animation/web/data.json')

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [colorNav, setColorNav] = useState('white')

  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    
    if(pathname === '/portfolio/isense' || pathname === '/portfolio/realelement' || pathname === '/portfolio/kiwiart' || pathname ===  '/portfolio/gratis' || pathname ===  '/about'){
      setColorNav('#333');
    }
    else{
      setColorNav('white');
    }
  }, [location]);

  function handle(){
    setNavOpen(!navOpen);
  }

  return (
      <header>
        <div className="container">
        <Media query={{ maxWidth: 750 }}>
          {matches =>
            matches ? (
              <>
                <div className="logo">
                  <Logo logoDesc={logoSrc} color={colorNav}/>
                </div>

                <a href="#nav" className={navOpen ? "burgerNav open" : "burgerNav"} onClick={() => handle()}>
                  <span style={{backgroundColor:colorNav}}/>
                  <span style={{backgroundColor:colorNav}}/>
                  <span style={{backgroundColor:colorNav}}/>
                </a>
                
                { navOpen && (
                <motion.div 
                  initial={{opacity: 0, scale: 0.9, y: 10 }}
                  animate={{opacity: 1, scale: 1, y: 0 }}
                  transition={{duration: 0.3, type: "tween"}}
                  className="navbarMob"
                >
                  <nav className="navBar">
                    <Link to="/about" onClick={() => handle()} className="link">О нас</Link>
                    <Link to="/portfolio" onClick={() => handle()} className="link">Портфолио</Link>
                    <Link to="/contact" onClick={() => handle()} className="link">Обсудить проект</Link>
                  </nav>
                  <div className='navContact'>
                    {contacts.map((contact) => (
                      <a href={contact.src} className="contactLink" rel='noreferrer' target="_blank" key={contact.text}>{contact.text}</a>
                    ))}
                  </div>
                  <div className="navSocial">
                    {links.map((link) => (
                      <a href={link.src} className="socialLink" rel='noreferrer' target="_blank" key={link.alt}><img src={link.icon} alt={link.alt} /></a>
                    ))}
                  </div>
                </motion.div>
                )}
              </>
            ) : (
              <>
                <div className="logo">
                  <Logo logoDesc={logoSrc} color={colorNav}/>
                </div>
                <nav className="navBar">
                  <Link to="/about" className="link" style={{color: colorNav}}>О нас</Link>
                  <Link to="/portfolio" className="link" style={{color: colorNav}}>Портфолио</Link>
                  <Button link="/contact" nameBtn="Обсудить проект" className="redButton" />
                </nav>
              </>
            )
          }
        </Media>
        </div>
      </header>
  )
}

export default Header
