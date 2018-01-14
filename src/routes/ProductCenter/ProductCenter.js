import React from 'react'
import {browserHistory} from 'react-router'
import classes from './ProductCenter.css'
import ReactDocumentTitle from 'react-document-title'
import ProductCenterComponent from 'components/ProductCenter'

const goBack = (e) => {
    e.preventDefault()
    return browserHistory.goBack()
}



export const ProductCenter = () => (
    <ReactDocumentTitle title='龙游机械-产品中心'>
        <ProductCenterComponent />
    </ReactDocumentTitle>
)

export default ProductCenter
