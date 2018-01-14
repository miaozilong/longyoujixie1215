import React from 'react'
import classes from './SideBar.css'
import ProductCenterImg from './img/1_y024.jpg'

export const SideBar = (props) => (
    <div>
        <div className="panel panel-default">
            <div className="panel-heading panel-heading-left-line">
                <h3 className="panel-title">{props.title}</h3>
            </div>
            <ul className="list-group">
                {props.items.map((currentValue,index,array)=>
                    <li className="list-group-item" key={index}>{currentValue}</li>
                )}
            </ul>
            <div className="panel-footer">
                <img src={ProductCenterImg} className="img-responsive"/>
            </div>
        </div>
    </div>
)

export default SideBar
