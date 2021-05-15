import React from 'react'
import '../style/main.scss'
import { containerText, itemUp, itemScale } from '../animation/config'
import { motion } from 'framer-motion'

import {isWebpSupported} from 'react-image-webp/dist/utils';

import Button from '../components/redButton/RedButton'

import img1 from '../assets/img/about/1.jpg'
import img2 from '../assets/img/about/2.jpg'
import img3 from '../assets/img/about/3.jpg'
import img4 from '../assets/img/about/4.jpg'
import img5 from '../assets/img/about/5.jpg'
import img6 from '../assets/img/about/6.jpg'
import img7 from '../assets/img/about/7.jpg'
import img8 from '../assets/img/about/8.jpg'
import img9 from '../assets/img/about/9.jpg'
import img10 from '../assets/img/about/10.jpg'
import img11 from '../assets/img/about/11.jpg'
import img12 from '../assets/img/about/12.jpg'

import img1Webp from '../assets/webp/about/1.webp'
import img2Webp from '../assets/webp/about/2.webp'
import img3Webp from '../assets/webp/about/3.webp'
import img4Webp from '../assets/webp/about/4.webp'
import img5Webp from '../assets/webp/about/5.webp'
import img6Webp from '../assets/webp/about/6.webp'
import img7Webp from '../assets/webp/about/7.webp'
import img8Webp from '../assets/webp/about/8.webp'
import img9Webp from '../assets/webp/about/9.webp'
import img10Webp from '../assets/webp/about/10.webp'
import img11Webp from '../assets/webp/about/11.webp'
import img12Webp from '../assets/webp/about/12.webp'

function MainPage() {
  return (
  <>
    <section className="mainpage">
      <motion.div
        variants={containerText}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="title">
        <motion.h1 variants={itemScale} transition={{duration: 0.3, type: "tween"}}>Мы разрабатываем<br /><span>цифровые</span> продукты</motion.h1>
        <motion.h4 variants={itemUp} transition={{duration: 0.4}}>Поможем сделать ваш бренд <span>уникальным</span></motion.h4>
        <motion.p variants={itemUp} transition={{duration: 0.3}}>Дизайн.<br/>Сайты. Приложения.<br />Продвижение.</motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15}}
          animate={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, y: 15}}
          transition={{duration: 0.3, type: "tween", delay: 0.5}}
        >
          <Button link="/contact" nameBtn="Рассказать о своем проекте" className="transparentButton" />
        </motion.div>
      </motion.div>
    </section>
    <section className="portfolioLink">
    <div className="container">
      <motion.div
        animate={{x: 0, opacity: 1 }}
        exit={{x: -50, opacity: 0 }}
        transition={{duration: 0.6, type: "tween"}}
        className="portfolioInfo">
        <h2>Наш <span>подход</span></h2>
        <p>Мы фокусируемся на постоянном <span>сотрудничестве</span> с Вами, <span>творчески</span> подходим к выполнению поставленных задач, внедряем новые <span>технологии</span> и соблюдаем все <span>сроки</span>, тем самым обеспечивая Вам значительное <span>преимущество</span> среди конкурентов на рынке.</p>
        <Button link="/portfolio" nameBtn="Смотреть портфолио" className="redButton" />
      </motion.div>
      <motion.div 
        animate={{x: 0, opacity: 1 }}
        exit={{x: 50, opacity: 0 }}
        transition={{duration: 0.6, type: "tween"}}
        className="portfolioImg">
          <div className="imgStripe stripe1">
            <img src={isWebpSupported() ? img1Webp : img1} alt="sense"/>
            <img src={isWebpSupported() ? img2Webp : img2} alt="Студия штор"/>
            <img src={isWebpSupported() ? img3Webp : img3} alt="Гратис"/>
            <img src={isWebpSupported() ? img4Webp : img4} alt="RealPeople"/>
            <img src={isWebpSupported() ? img5Webp : img5} alt="Type Me Club"/>
            <img src={isWebpSupported() ? img6Webp : img6} alt="Baggage"/>
          </div>
          <div className="imgStripe stripe2">
            <img src={isWebpSupported() ? img7Webp : img7} alt="Автоматизация"/>
            <img src={isWebpSupported() ? img8Webp : img8} alt="Панацея"/>
            <img src={isWebpSupported() ? img9Webp : img9} alt="RealWeb Art"/>
            <img src={isWebpSupported() ? img10Webp : img10} alt="Kiwi Art"/>
            <img src={isWebpSupported() ? img11Webp : img11} alt="I am Studio"/>
            <img src={isWebpSupported() ? img12Webp : img12} alt="The Meat Man"/>
          </div>
        </motion.div>
      </div>
    </section> 
  </>
  )
}

export default MainPage