import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import classes from './Layout.css'
import Footer from '../Footer'
export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default CoreLayout
