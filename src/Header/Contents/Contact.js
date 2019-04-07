import React, { Component } from 'react';
import BarItem from './BarItem'
import '../Header.css'


class Contact extends Component {
    render() {
        return (
            <div id="font">
                <BarItem />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="Contact" className="jumbotron">
                                <h1 className="animated zoomIn delay-1s display-4" >ระบบฐานข้อมูลผู้สูงอายุ</h1>
                                {/* <p className="lead">การติดต่อหน่วยงานที่เกี่ยวข้อง</p>
                               <hr className="animated zoomIn delay-3s my-4"/>
                                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                               */}
                                <p></p><br />
                                <a class="btn btn-primary btn-lg animated bounceInLeft delay-3s" href="#" role="button">ติดต่อเรา</a>
                                <br /><br />

                                <br />
                            </div>
                        </div>

                    </div>

                    <br />
                    <div className="row">
                        <div className="col-lg-1">

                        </div>

                        <div className="col-lg-4">
                            <div class=" animated zoomIn delay-5s media" id="Bg">
                            
                              <h1>     </h1>  <img src="https://image.flaticon.com/icons/svg/1721/1721584.svg" class="mr-3" width="50px" alt="Tel" />
                                <div class="media-body">
                                    <br />
                                    <h5 class="mt-0">Telephone</h5>
                                    09-xxxxxxxx
                                    <br />
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <br/>
                        </div>

                        <div className="col-lg-4">
                            <div class=" animated zoomIn delay-5s media" id="Bg">
                                <img src="https://image.flaticon.com/icons/svg/1392/1392056.svg" class="mr-3" width="50px" alt="callcenter" />
                                <div class="media-body">
                                    <br />
                                    <h5 class="mt-0">Call Center</h5>
                                    
                                    <br />
                                </div>
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
export default Contact;

