import React from 'react'
import classes from './AboutUs.css'
import AboutSideBar from '../AboutSideBar'
import AboutMain from '../AboutMain'

export const AboutUs = () => (
  <div>
      <div className="container about-content">
          <div className="row">
              <div className="col-md-2">
                  <AboutSideBar/>
              </div>
              <div className="col-md-10">
                  <AboutMain />
              </div>
          </div>
      </div>
  </div>
)

export default AboutUs
