import React from 'react'
import { motion } from 'framer-motion'
import Button from '../redButton/RedButton'
import { links, contacts } from '../header/links'
import './ContactForm.scss'

function Completed(props) {
  return (
    <motion.div 
      initial={{opacity: 0 }}
      animate={{opacity: 1 }}
      transition={{duration: 0.3, type: "tween"}}
      className="formCompleted">
      <motion.div 
        initial={{opacity: 0, scale: 0.9, y: 10 }}
        animate={{opacity: 1, scale: 1, y: 0 }}
        transition={{duration: 0.5, delay: 0.1, type: "tween"}}
        className="formCompleted__modal">
        <h2>Заявка принята</h2>
        <p>Спасибо за заявку, {props.name}!<br />В ближайшее время мы свяжемся с Вами.</p>
        <Button link="/" className="redButton" nameBtn="Перейти на главную"/>
        <div className="navSocial">
          {links.map((link) => (
            <a href={link.src} className="socialLink" rel='noreferrer' target="_blank" key={link.alt}><img src={link.icon} alt={link.alt} /></a>
          ))}
        </div>
        <div className='navContact'>
          {contacts.map((contact) => (
            <a href={contact.src} className="contactLink" rel='noreferrer' target="_blank" key={contact.text}>{contact.text}</a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Completed
