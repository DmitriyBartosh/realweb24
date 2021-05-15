import React, { useEffect } from 'react'
import '../style/contact.scss'

import Form from '../components/contactForm/ContactForm'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },)

  return (
  <div className="contact">
    <Form />
  </div>
  )
}

export default Contact
