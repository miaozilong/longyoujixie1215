import React from 'react'
import { browserHistory } from 'react-router'
import classes from './AboutUs.css'
import testPic from './20171223225003.png'

const goBack = (e) => {
  e.preventDefault()
  return browserHistory.goBack()
}

export const AboutUs = () => (
  <div>
    <h4>About us</h4>
    <img src={testPic} alt="图片"/>
  </div>
)

export default AboutUs
