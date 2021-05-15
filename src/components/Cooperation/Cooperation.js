import React from 'react'
import Button from '../redButton/RedButton'
import { motion } from 'framer-motion'
import './Cooperation.scss'

function Cooperation(props) {
  return (
  <div className="cooperationBlock" style={{background: props.background}}>
    <motion.div 
      animate={{ opacity: 1, y: 0}}
      exit={{ opacity: 0, y: -50}}
      transition={{duration: 0.6, type: "tween"}}
      className="container-sm">
      <h2 style={{color: props.color}}>Давайте начнем создавать<br />что-то <span>особенное</span></h2>
      <Button link="/contact" nameBtn="Рассказать о проекте" className="redButton" />
    </motion.div>
  </div>
  )
}

export default Cooperation
