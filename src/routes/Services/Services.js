import React from 'react'
import { browserHistory } from 'react-router'
import classes from './Services.css'
import ReactDocumentTitle from 'react-document-title'
import ServiceComponent from 'components/Service'

const goBack = (e) => {
  e.preventDefault()
  return browserHistory.goBack()
}

export const Services = () => (
    <ReactDocumentTitle title='龙游机械-服务中心'>
        <ServiceComponent />
    </ReactDocumentTitle>
)

export default Services
