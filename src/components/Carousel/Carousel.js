import React from 'react'
import ca01 from './img/ca01.jpg'
import ca02 from './img/ca02.jpg'
import ca03 from './img/ca03.jpg'
import ca04 from './img/ca04.jpg'

export const Carousel = () => (
  <div>
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              <li data-target="#carousel-example-generic" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
              <div className="item active">
                  <img src={ca03} />
                      <div className="carousel-caption">
                      </div>
              </div>
              <div className="item">
                  <img src={ca02} />
                      <div className="carousel-caption">
                      </div>
              </div>
              <div className="item">
                  <img src={ca01} />
                      <div className="carousel-caption">
                      </div>
              </div>
              <div className="item">
                  <img src={ca04} />
                      <div className="carousel-caption">
                      </div>
              </div>
          </div>
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
          </a>
      </div>
  </div>
)



export default Carousel
