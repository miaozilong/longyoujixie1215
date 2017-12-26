import React from 'react'
import classes from './NewsCenter.css'
import NewsMain from '../NewsMain'
import SideBar from "components/SideBar/SideBar";

export const NewsCenter = () => (
    <div>
        <div className="container about-content">
            <div className="row">
                <div className="col-md-2">
                    <SideBar title='新闻中心' items={['公司新闻', '行业动态']}/>
                </div>
                <div className="col-md-10">
                    <NewsMain/>
                </div>
            </div>
        </div>
    </div>
);

export default NewsCenter
