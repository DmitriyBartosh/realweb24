import React from 'react'

import Intro from '../components/About/intro/intro'
import AboutMain from '../components/About/aboutMain/AboutMain'
import Fundamental from '../components/About/Fundamental/Fundamental'
import Art from '../components/About/artBlock/ArtBlock'
import Photo from '../components/About/photoBlock/PhotoBlock'
import Three from '../components/About/threeBlock/ThreeBlock'
import Cooperation from '../components/Cooperation/Cooperation'

function About() {
  return (
    <div>
      <Intro />
      <AboutMain />
      <Fundamental />
      <Art />
      <Photo />
      <Three />
      <Cooperation background='white' color='#333'/>
    </div>
  )
}

export default About
