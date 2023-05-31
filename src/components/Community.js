import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../assets/img/img1.jpg";
import image2 from "../assets/img/img2.jpg";
import image3 from "../assets/img/img3.jpg";

export default class Comms extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 }, 
      items: 5
      },
      desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items:3
      },
      tablet:{
          breakpoint: {max:1024, min: 464},
          items:2
      },
      mobile:{
          breakpoint: {max:464, min: 0},
          items:1
          }
      };
    return (
      <div>
      <h1>Our <span> Community </span></h1>
    
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={image1}/>
          <div className="myCarousel">
            <h3>Community Manz 1</h3>
            <h4>From Brampton</h4>
            <p>
               Wagwan my G's, Handifuel is lit, y'all should try it out for realz no kyapp

            </p>
          </div>
        </div>

        <div>
          <img src={image2} />
          <div className="myCarousel">
            <h3>Community Manz 2</h3>
            <h4>From Sauga</h4>
            <p>
              Sauga on top
            </p>
          </div>
        </div>

        <div>
          <img src={image3} />
          <div className="myCarousel">
            <h3>Community Manz 3</h3>

            <h4> From yo momma</h4>
            <p>
                    Noiceee  !!!!!!!
            </p>
          </div>
        </div>
      </Carousel>
      </div>
    );
  }
}