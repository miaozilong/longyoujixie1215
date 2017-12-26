import React from 'react'
import { browserHistory } from 'react-router'
import classes from './Contact.css'
import ReactDocumentTitle from 'react-document-title'
import ContactView from 'components/Contact'


export const Contact = () => (
    <ReactDocumentTitle title='龙游机械-联系我们'>
        <ContactView/>
    </ReactDocumentTitle>
)

export default Contact
