import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Jumbotron } from 'reactstrap';
import Barin from './BarIn';
import '../../Content/Content.css'

import Pic1 from '../img/AboutA/team0.jpg'
import Pic3 from '../img/AboutA/team1.jpg'
import Pic2 from '../img/AboutA/team2.jpg'
import Megaphone from '../img/AboutA/Megaphone.svg'


class About extends Component {
    render() {
        return (
            <div className="font">
                <Barin />

                <Carousel >

                    <Carousel.Item >
                        <img className="d-block w-100" src={Pic1} alt="First slide" />
                        <Carousel.Caption>
                            <div className="CarouselA">
                                <Jumbotron id="radius" className=" animated zoomIn delay-1s jumbotron-caption d-none d-lg-block active">
                                    <div >
                                        <h1 className="display-3">หน่วยงานที่เกี่ยวข้อง</h1>
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
                                        <h1 className="display-3">ประเด็นการช่วยเหลือผู้สูงอายุ</h1>
                                        <p className="lead">เบี้ยยังชีพ การบริการ </p>
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
                                        <p className="lead">ภายในจังหวัดภูเก็ต</p>
                                    </div>
                                </Jumbotron>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>


                <div className="container-fluid">

                    <br />
                    <div className="row  " >
                        <div class="col-lg-1">
                        </div>

                        <div class="col-lg-5 col-xs-12  col-sm-12 col-md-5">
                            <img src="http://phuket.dop.go.th/images/cover.png" width="20px" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">ศูนย์พัฒนาการจัดสวัสดิการสังคมผู้สูงอายุภูเก็ต</h5>
                                <h6>ข่าวประชาสัมพันธ์ <a href="http://phuket.dop.go.th/publicizes"><img src={Megaphone} width="30px" /></a></h6>
                                <a href="http://phuket.dop.go.th/index"><button type="button" class="btn btn-primary">อ่านต่อ</button></a>
                            </div>
                        </div>

                        <div class="col-lg-1">
                        </div>

                        <div class="col-lg-4 col-xs-12  col-sm-12 col-md-5">
                            <img src="http://www.konjaidee.org/sites/all/themes/framework/images/header2013.jpg" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">ชมรมผู้สูงอายุ จังหวัดภูเก็ต | คนใจดี</h5>
                                {/* <h6>ข่าวประชาสัมพันธ์ <a href="http://phuket.dop.go.th/publicizes"><img src="https://image.flaticon.com/icons/svg/174/174240.svg" width="30px" /></a></h6> */}
                                <a href="http://www.konjaidee.org/node/144"><button type="button" class="btn btn-primary">อ่านต่อ</button></a>
                            </div>
                        </div>

                        <div class="col-lg-1">
                        </div>

                    </div>


                </div>
            </div>
        );
    }

}
export default About;

