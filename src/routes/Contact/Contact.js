import React from 'react'
import { browserHistory } from 'react-router'
import classes from './Contact.css'

const goBack = (e) => {
  e.preventDefault()
  return browserHistory.goBack()
}

export const Contact = () => (
  <div>
    <h4>Contact us</h4>
  </div>
)

export default Contact
