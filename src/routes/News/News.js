import React from 'react'
import { browserHistory } from 'react-router'
import classes from './News.css'

const goBack = (e) => {
  e.preventDefault()
  return browserHistory.goBack()
}

export const News = () => (
  <div>
    <h4>News ...</h4>
  </div>
)

export default News
