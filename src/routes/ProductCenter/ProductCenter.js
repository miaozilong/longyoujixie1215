import React from 'react'
import { browserHistory } from 'react-router'
import classes from './ProductCenter.css'
import ReactDocumentTitle from 'react-document-title'
const goBack = (e) => {
  e.preventDefault()
  return browserHistory.goBack()
}

export const ProductCenter = () => (
    <ReactDocumentTitle title='龙游机械-产品中心'>
        <h4>ProductCenter...</h4>
    </ReactDocumentTitle>
)

export default ProductCenter
