import React from 'react'
import classes from './Contact.css'
import ContactMain from '../ContactMain'
import SideBar from "components/SideBar/SideBar";

export const Contact = () => (
    <div>
        <div className="container about-content">
            <div className="row">
                <div className="col-md-2">
                    <SideBar title='联系我们' items={[]}/>
                </div>
                <div className="col-md-10">
                    <ContactMain/>
                </div>
            </div>
        </div>
    </div>
)
export default Contact

