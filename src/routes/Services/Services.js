import React from 'react'
import { browserHistory } from 'react-router'
import classes from './Services.css'

const goBack = (e) => {
  e.preventDefault()
  return browserHistory.goBack()
}

export const Services = () => (
  <div>
    <h4>Services</h4>
  </div>
)

export default Services
