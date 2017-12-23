import React from 'react'
import { browserHistory } from 'react-router'
import classes from './Industry.css'

const goBack = (e) => {
  e.preventDefault()
  return browserHistory.goBack()
}

export const Industry = () => (
  <div>
    <h4>Industry</h4>
  </div>
)

export default Industry
