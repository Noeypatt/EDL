import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Pic1 from '../Content/img/hp0.jpg'
import Pic2 from './img/hp1.jpg'
import Pic3 from './img/hp2.jpg'


class Hospital extends Component {
    render() {
        return (
            <div id="font">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Pic1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="carousel-caption d-none d-lg-block active">
                            <h3>โรงพยาบาลใน ระเเวกใกล้เคียง</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Pic2}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="carousel-caption d-none d-lg-block active">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Pic3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="carousel-caption d-none d-lg-block active">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
               
            </div>
        )
    }
}
export default Hospital;
