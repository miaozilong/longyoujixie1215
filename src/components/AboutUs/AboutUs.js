import React from 'react'
import classes from './AboutUs.css'
import AboutMain from '../AboutMain'
import SideBar from '../SideBar'
export const AboutUs = () => (
    <div>
        <div className="container about-content">
            <div className="row">
                <div className="col-md-2">
                    <SideBar title='关于我们' items={['企业简介','企业文化','资质荣誉']}/>
                </div>
                <div className="col-md-10">
                    <AboutMain/>
                </div>
            </div>
        </div>
    </div>
)
export default AboutUs

