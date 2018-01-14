import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.css'
import Logo from '../Logo'
import VerticalLine from './VerticalLine'
import NavBar from '../NavBar'
import Carousel from '../Carousel'

export const Header = () => (
    <div>
        {/*设为首页 加入收藏*/}
        <div className="container">
            <div className="row">
                <div className="col-md-10"></div>
                <div className="col-md-2">
                    <span className="setIndexPage"><a href="#">设为首页</a></span><span> | </span><span
                    className="addToFav"><a href="#">加入收藏</a></span>
                </div>
            </div>
            {/*头部*/}
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-2">
                            <Logo/>
                        </div>
                        <div className="col-md-1" style={{width: 0}}>
                            <VerticalLine/>
                        </div>
                        <div className="col-md-9">
                            <div className="logo-txt">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="longyouji-txt">南通龙游机械有限公司</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="longyoujixie-en-txt">longyou heavy machinery co., LTD</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="telephone">
                        咨询：0513-87260058
                    </div>
                </div>
            </div>
        </div>
       	{/*导航条*/}
       	<NavBar />
		{/*轮播图*/}
		<Carousel />

    </div>
);


export default Header
