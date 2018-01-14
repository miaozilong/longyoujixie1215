import React from 'react'
import {browserHistory} from 'react-router'
import classes from './Industry.css'
import ReactDocumentTitle from 'react-document-title'
import IndustryComponent from 'components/Industry'
const goBack = (e) => {
    e.preventDefault()
    return browserHistory.goBack()
}

export const Industry = () => (
    <ReactDocumentTitle title='龙游机械-行业应用'>
        <div>
            <IndustryComponent />
        </div>
    </ReactDocumentTitle>
)

export default Industry
