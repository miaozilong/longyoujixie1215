import React from 'react'
import classes from './ContactSideBar.css'
import ProductCenterImg from './img/1_y024.jpg'

export const ContactSideBar = () => (
  <div>
      <div className="panel panel-default">
          <div className="panel-heading panel-heading-left-line">
              <h3 className="panel-title">关于我们</h3>
          </div>
          <div className="panel-footer">
              <img src={ProductCenterImg} className="img-responsive"/>
          </div>
      </div>
  </div>
)

export default ContactSideBar
