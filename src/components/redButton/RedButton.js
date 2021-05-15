import React from 'react'
import { Link } from 'react-router-dom'
import './RedButton.scss'

function RedButton(props) {
  return (
    <Link to={props.link} className={props.className}>
      {props.nameBtn}
    </Link>
  )
}

export default RedButton
