import React from 'react'
import { Link } from 'react-router-dom'
import './AboutFooter.scss'

function AboutFooter() {
  return (
    <section className="callbackContent">
      <div className="container">
        <div className="buttonSection">
          <Link to="/portfolio" className="callbackBtn"><span>Портфолио</span></Link>
        </div>
        <div className="infoSection">
          <h2>Наши работы</h2>
          <div className="line"/>
          <p>Смотрите наши работы</p>
        </div>
      </div>
      <div className="container">
        <div className="textCircle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <path d="M 250, 250m -250, 0a 250,250 0 0,1 500,0a 250,250 0 0,1 -500,0" fill="none" id="form-textcircle"></path>
          <text dy="40" textLength="300%">
          <textPath href="#form-textcircle" textLength="300%">Бренд Дизайн Разработка Продвижение</textPath>
          </text>
        </svg>
        </div>
      </div>
    </section>
  )
}

export default AboutFooter
