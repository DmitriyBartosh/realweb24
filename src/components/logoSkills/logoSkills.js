import React, { useEffect, useRef } from 'react'
import './logoSkills.scss'
import lottie from 'lottie-web'
import logo from '../../assets/img/logo/real.svg'
import { Link } from 'react-router-dom'

function LogoSkills() {
  const skills = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: skills.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: require('../../assets/animation/skills/data.json')
    })
    setTimeout(() => {
      lottie.play();
    }, 6000);
  }, [])

  return (
    <Link className="logoSkills" to="/">
      <img src={logo} alt="logo realskills"/>
      <div className="skills" ref={skills}/>
    </Link>
  )
}

export default LogoSkills