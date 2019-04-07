import React, { Component } from 'react';
import Barin from './Barin';



class About extends Component {
    render() {
        return (
            <div id="font">
                <Barin />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="About" className="jumbotron">
                                <br /><br />
                                <h1 className="animated zoomIn delay-1s display-4" >หน่วยงานที่เกี่ยวข้อง</h1>
                                <h3 className="animated zoomIn delay-1s">ภายในจังหวัดภูเก็ต</h3><br />
                                {/* <a class="btn btn-primary btn-lg animated bounceInLeft delay-3s" href="#" role="button">ติดต่อเรา</a> */}
                                <br />

                            </div>
                        </div>

                    </div>

                    <br />
                    <div className="row animated zoomIn delay-2s " >
                        <div class="col-lg-1">
                        </div>

                        <div class="col-lg-5 col-xs-12  col-sm-12 col-md-5">
                            <img src="http://phuket.dop.go.th/images/cover.png" width="20px" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">ศูนย์พัฒนาการจัดสวัสดิการสังคมผู้สูงอายุภูเก็ต</h5>
                                <h6>ข่าวประชาสัมพันธ์ <a href="http://phuket.dop.go.th/publicizes"><img src="https://image.flaticon.com/icons/svg/174/174240.svg" width="30px" /></a></h6>
                                <a href="http://phuket.dop.go.th/index"><button type="button" class="btn btn-primary">อ่านต่อ</button></a>
                            </div>
                        </div>

                        <div class="col-lg-1">
                        </div>

                        <div class="col-lg-4 col-xs-12  col-sm-12 col-md-5">
                        <img src="http://www.konjaidee.org/sites/all/themes/framework/images/header2013.jpg"  class="card-img-top" alt="" />
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

