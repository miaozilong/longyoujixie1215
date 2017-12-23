import React from 'react'
import classes from './NavBar.css'
import {Link,IndexLink } from 'react-router'

export const NavBar = () => (
    <div>
        <nav className="navbar navbar-default nav-justified">
            <div className="container">
                <ul className="nav navbar-nav ">
                    <li>
                        <IndexLink to='/' activeClassName='menu-item-active' >
                            首页
                        </IndexLink>
                    </li>
                    <li>
                        <Link to='/aboutus' activeClassName='menu-item-active'>
                            关于我们
                        </Link>
                    </li>
                    <li>
                        <Link to='/news' activeClassName='menu-item-active'>
                            新闻中心
                        </Link>
                    </li>
                    <li>
                        <Link to='/product-center' activeClassName='menu-item-active'>
                            产品中心
                        </Link>
                    </li>
                    <li>
                        <Link to='/industry' activeClassName='menu-item-active'>
                            行业应用
                        </Link>
                    </li>
                    <li>
                        <Link to='/services' activeClassName='menu-item-active'>
                            服务中心
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact' activeClassName='menu-item-active'>
                            联系我们
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);



export default NavBar
