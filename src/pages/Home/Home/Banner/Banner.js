import React from "react";
import { Carousel } from "react-bootstrap";
import carosel1 from "../../../../images/carosel/corosol-2 (1).jpg";
import carosel2 from "../../../../images/carosel/corosol-2 (2).jpg";
import carosel3 from "../../../../images/carosel/corosol-2.jpg";
const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: 600 }}
            className="d-block  w-100 "
            src={carosel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: 600 }}
            className="d-block w-100"
            src={carosel2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: 600 }}
            className="d-block w-100"
            src={carosel3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
