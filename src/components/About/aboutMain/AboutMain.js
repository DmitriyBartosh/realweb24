import React, { useEffect } from 'react'
import Header from './Header'
import Collage from './Collage'
import Phone from './PhoneBlock'
import UsedBy from './UsedBy'
import Footer from './Footer'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './AboutMain.scss'

function AboutMain() {

  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])

  return (
    <div className="introContainer">
      <Header />
      <div className="introMedia">
        <Collage />
        <Phone />
      </div>
      <UsedBy />
      <Footer />
    </div>
  )
}

export default AboutMain
