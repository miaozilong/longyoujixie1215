import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.css'

export const Header = () => (
  <div>
  	{/*设为首页 加入收藏*/}
    <div className="container">
    	<div className="row">
	    	<div className="col-md-10"></div>
	    	<div className="col-md-2">
	    		<span class="setIndexPage"><a href="#">设为首页</a></span><span> | </span><span class="addToFav"><a href="#">加入收藏</a></span>
	    	</div>
    	</div>
    	{/*头部*/}
    	<div className="row">
    		<div className="col-md-8" >
    			<div className="row">
    				
    			</div>
    		</div>
    		<div className="col-md-4" >
    		
    		</div>
    	</div>
    </div>
    <IndexLink to="/" activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to="/counter" activeClassName={classes.activeRoute}>
      Counter
    </Link>
  </div>
)

export default Header
