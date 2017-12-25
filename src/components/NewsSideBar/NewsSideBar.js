import React from 'react'
import classes from './NewsSideBar.css'
import ProductCenterImg from './img/1_y024.jpg'

export const NewsSideBar = () => (
  <div>
      <div className="panel panel-default">
          <div className="panel-heading panel-heading-left-line">
              <h3 className="panel-title">新闻中心</h3>
          </div>
          <ul className="list-group">
              <li className="list-group-item">公司新闻</li>
              <li className="list-group-item">行业动态</li>
          </ul>
          <div className="panel-footer">
              <img src={ProductCenterImg} className="img-responsive"/>
          </div>
      </div>
  </div>
)

export default NewsSideBar
