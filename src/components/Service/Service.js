import React from 'react'
import classes from './Service.css'
import SideBar from '../SideBar'
import ServiceMain from '../ServiceMain'

export const Service = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar title='服务中心' items={['服务解决方案','零配件','维护保养','紧急维修','培训']}/>
                </div>
                <div className="col-md-10">
                    <ServiceMain />
                </div>
            </div>
        </div>
    </div>
)

export default Service
