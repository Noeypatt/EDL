import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css'
import A from './img/logo/Allowance.svg'
import service from './img/logo/service.svg'
import DocA from './img/logo/DocA.svg'
import talka from './img/logo/talka.svg'

class Allowance extends Component {

    render() {
        return (
            <div>
                <div id="Ser" className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>How can we help </h1>
                            <br/>
                        </div>
                    </div>

                    <div id="Choice" className="container">
                        <div className="row">

                            <div className="col-lg-3 col-sm-5">
                            <a href="/AboutA"><img className="pic" src={A} width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title font">หน่วยงานที่เกี่ยวข้อง</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-5 ">
                            <a href="/ServiceA"><img className="pic" src={service}  width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title font">การบริการ</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 ">
                            <a href="#"><img className="pic" src={DocA}  width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title font">เอกสารที่จำเป็น</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 ">
                            <a href="#"><img className="pic" src={talka}  width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title font">การติดต่อ</h5>
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
