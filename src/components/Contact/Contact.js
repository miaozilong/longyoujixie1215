import React from 'react'
import classes from './Contact.css'
import ContactSideBar from '../ContactSideBar'
import ContactMain from '../ContactMain'

export const Contact = () => (
    <div>
        <div className="container about-content">
            <div className="row">
                <div className="col-md-2">
                    <ContactSideBar/>
                </div>
                <div className="col-md-10">
                    <ContactMain/>
                </div>
            </div>
        </div>
    </div>
)
export default Contact

