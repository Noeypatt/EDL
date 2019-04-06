import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Pic1 from '../Content/img/hp0.jpg'
import Pic2 from './img/hp1.jpg'
import Pic3 from './img/hp2.jpg'
import './Content.css'


class Hospital extends Component {
    render() {
        return (
            <div >
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Pic1}
                            alt="First slide"
                        />
                        <Carousel.Caption id="font" className="carousel-caption d-none d-lg-block active">
                            <h3 >โรงพยาบาลใกล้เคียงคุณ</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Pic2}
                            alt="Third slide"
                        />

                        <Carousel.Caption id="fontb" className="carousel-caption d-none d-lg-block active">
                            <h3 >การตวจสุขภาพประจำปี</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Pic3}
                            alt="Third slide"
                        />

                        <Carousel.Caption id="fontb" className="carousel-caption d-none d-lg-block active">
                            <h3>สถิติผู้ป่วย เเละโรคที่มีอัตราความเสี่ยงสูง</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
               
            </div>
        )
    }
}
export default Hospital;
