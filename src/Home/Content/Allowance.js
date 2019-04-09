import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css'

class Allowance extends Component {

    render() {
        return (
            <div>
                <div id="Ser" className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>How can we help </h1>
                            <br/>
                        </div>
                    </div>

                    <div id="Choice" className="container-fluid">
                        <div className="row">

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                            <a href="/AboutA"><img className="pic" src="https://image.flaticon.com/icons/svg/1256/1256650.svg" width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">หน่วยงานที่เกี่ยวข้อง</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                            <a href="#"><img className="pic" src="https://image.flaticon.com/icons/svg/1312/1312432.svg" width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">การบริการ</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                            <a href="#"><img className="pic" src="https://image.flaticon.com/icons/svg/1006/1006516.svg" width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">เอกสารที่จำเป็น</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                            <a href="#"><img className="pic" src="https://image.flaticon.com/icons/svg/1141/1141031.svg" width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">การติดต่อ</h5>
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
export default Allowance;
