import React from 'react'
import {browserHistory} from 'react-router'
import classes from './AboutUs.css'
import AboutSideBar from 'components/AboutSideBar'
import AboutUsView from 'components/AboutUs'


const goBack = (e) => {
    e.preventDefault()
    return browserHistory.goBack()
}

export const AboutUs = () => (
    <div>
       <AboutUsView/>
    </div>
)

export default AboutUs
