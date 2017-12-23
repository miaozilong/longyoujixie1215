import React from 'react'
import { browserHistory } from 'react-router'
import classes from './AboutUs.css'

const goBack = (e) => {
  e.preventDefault()
  return browserHistory.goBack()
}

export const AboutUs = () => (
  <div>
    <h4>About us</h4>
  </div>
)

export default AboutUs
