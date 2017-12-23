import React from 'react'
import { browserHistory } from 'react-router'
import classes from './ProductCenter.css'

const goBack = (e) => {
  e.preventDefault()
  return browserHistory.goBack()
}

export const ProductCenter = () => (
  <div>
    <h4>ProductCenter...</h4>
  </div>
)

export default ProductCenter
