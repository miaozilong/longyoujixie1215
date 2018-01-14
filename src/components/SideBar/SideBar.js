import React from 'react'
import classes from './SideBar.css'
import ProductCenterImg from './img/1_y024.jpg'
import {Link} from 'react-router'
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
                <Link to='/ProductCenter'>
                    <img src={ProductCenterImg} className="img-responsive"/>
                </Link>
            </div>
        </div>
    </div>
)

export default SideBar
