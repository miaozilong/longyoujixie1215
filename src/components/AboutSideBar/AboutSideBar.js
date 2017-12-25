import React from 'react'
import classes from './AboutSideBar.css'
import ProductCenterImg from './img/1_y024.jpg'

export const AboutSideBar = () => (
  <div>
      <div className="panel panel-default">
          <div className="panel-heading panel-heading-left-line">
              <h3 className="panel-title">关于我们</h3>
          </div>
          <ul className="list-group">
              <li className="list-group-item">企业简介</li>
              <li className="list-group-item">企业文化</li>
              <li className="list-group-item">资质荣誉</li>
          </ul>
          <div className="panel-footer">
              <img src={ProductCenterImg} className="img-responsive"/>
          </div>
      </div>
  </div>
)

export default AboutSideBar
