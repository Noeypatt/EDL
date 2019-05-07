import React, { Component } from 'react';
import BarItem from './BarItem'
import '../Header.css'


class Contact extends Component {
    render() {
        return (
            <div >
                <BarItem />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="about" className="jumbotron">
                                <br />
                                <h1 className="animated zoomIn delay-1s display-4" >ระบบฐานข้อมูลผู้สูงอายุ</h1>
                                <p className="animated fadeInUp delay-1s lead">ร่วมเป็นส่วนหนึ่ง ที่ช่วยพัฒนาคุณภาพชีวิตของผู้สูงอายุ</p>

                            </div>
                        </div>

                    </div> <br />

                    {/* <div className="row">
                        <div className="col-lg-1">
                        </div>

                        <div className="col-lg-4">

                            <div id="aboutcontent" className="jumbotron ">
                                <br />
                                <h5>ระบบฐานข้อมูลผู้สูงอายุ</h5>
                                <br />
                            </div>
                        </div>

                        <div className="col-lg-2">
                        </div>

                        <div className="col-lg-4">
                            <div id="aboutcontent" className="jumbotron ">
                                <br />
                                <h5>ระบบฐานข้อมูลผู้สูงอายุ</h5>
                                <br />
                            </div>
                        </div>

                        <div className="col-lg-1">
                        </div>



                    </div> <br /> */}






                </div>
            </div>
        );
    }

}
export default Contact;