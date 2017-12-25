import React from 'react'
import {browserHistory} from 'react-router'
import classes from './AboutUs.css'
import AboutUsView from 'components/AboutUs'
import ReactDocumentTitle from 'react-document-title'

const goBack = (e) => {
    e.preventDefault()
    return browserHistory.goBack()
}

export const AboutUs = () => (
    <ReactDocumentTitle title="龙游机械-关于我们">
        <div>
           <AboutUsView/>
        </div>
    </ReactDocumentTitle>
)

export default AboutUs
