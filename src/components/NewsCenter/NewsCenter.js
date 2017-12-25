import React from 'react'
import classes from './NewsCenter.css'
import NewsMain from '../NewsMain'

import NewsSideBar from '../NewsSideBar'

export const NewsCenter = () => (
    <div>
        <div className="container about-content">
            <div className="row">
                <div className="col-md-2">
                    <NewsSideBar/>
                </div>
                <div className="col-md-10">
                    <NewsMain />
                </div>
            </div>
        </div>
    </div>
);

export default NewsCenter
