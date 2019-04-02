import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css'

class Service extends Component {

    render() {
        return (
            <div   >
                <div id="Ser" className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Service of you</h1>
                            <br/><br/>
                        </div>
                    </div>

                    <div id="Choice" className="container-fluid">
                        <div className="row">

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                                <img src="https://image.flaticon.com/icons/svg/822/822161.svg" width="50px" />
                                <div className="card-body">
                                    <h5 className="card-title">บริการดูแลผู้สูงอายุ</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                                <img src="https://image.flaticon.com/icons/svg/822/822169.svg" width="50px" />
                                <div className="card-body">
                                    <h5 className="card-title">การตรวจสุขภาพ</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                                <img src="https://image.flaticon.com/icons/svg/822/822140.svg" width="50px" />
                                <div className="card-body">
                                    <h5 className="card-title">โรงพยาบาลใกล้บ้าน</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                                <img src="https://image.flaticon.com/icons/svg/822/822177.svg" width="50px" />
                                <div className="card-body">
                                    <h5 className="card-title">โรคควรระวัง</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                                <img src="https://image.flaticon.com/icons/svg/822/822160.svg" width="50px" />
                                <div className="card-body">
                                    <h5 className="card-title">เอกสารที่จำเป็น</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>


                            <div className="col-lg-3 col-sm-6 col-xs-6">
                                <img src="https://image.flaticon.com/icons/svg/822/822170.svg" width="50px" />
                                <div className="card-body">
                                    <h5 className="card-title">สายด่วน เหตุฉุกเฉิน</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                            

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
export default Service;
