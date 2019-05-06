import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Jumbotron} from 'reactstrap';
import Barin from './BarIn';
import '../Content.css'
import Pic1 from '../img/AboutH/H1.jpg'
import Pic2 from '../img/AboutH/activitive.jpg'
import Pic3 from '../img/AboutH/volunteer.jpg'


class About extends Component {
    render() {
        return (
            <div id="font">
                <Barin />
                <Carousel >

                    <Carousel.Item >
                        <img className="d-block w-100" src={Pic1} alt="First slide" />
                        <Carousel.Caption>
                            <div className="CarouselA">
                                <Jumbotron id="radius" className=" animated zoomIn delay-1s jumbotron-caption d-none d-lg-block active">
                                    <div >
                                        <h1 className="display-3">หน่วยงานดูเเลผู้สูงอายุ</h1>
                                        <p className="lead">ภายในจังหวัดภูเก็ต</p>
                                    </div>
                                </Jumbotron>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Pic2} alt="Third slide" />
                        <Carousel.Caption>
                            <div className="CarouselA">
                                <Jumbotron id="radius" className=" animated zoomIn delay-1s jumbotron-caption d-none d-lg-block active">
                                    <div >
                                        <h1 className="display-3">กิจกรรมเพื่อผู้สูงอายุ</h1>
                                        <p className="lead">กิจกรรมการกุศล การบริจาค</p>
                                    </div>
                                </Jumbotron>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Pic3} alt="Third slide" />
                        <Carousel.Caption>
                            <div className="CarouselA">
                                <Jumbotron id="radius" className=" animated zoomIn delay-1s jumbotron-caption d-none d-lg-block active">
                                    <div >
                                        <h1 className="display-3">อาสาสมัคร</h1>
                                        <p className="lead">ดูเเลผู้สูงอายุ</p>
                                    </div>
                                </Jumbotron>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>


            </div>
            
        );
    }

}
export default About;

