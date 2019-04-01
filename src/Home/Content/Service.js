import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css'

class Service extends Component {

    render() {
        return (
            <div id ="Top0"   >
                <div id="Ser" class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>Service of you</h1>
                            <br/>
                        </div>
                    </div>

                    <div id="Choice" class="container-fluid">
                        <div class="row">

                            <div class="col-lg-3 col-sm-6 col-xs-6">
                                <img src="https://image.flaticon.com/icons/svg/822/822161.svg" width="50px" />
                                <div class="card-body">
                                    <h5 class="card-title">บริการดูแลผู้สูงอายุ</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-sm-6 col-xs-6">
                                <img src="https://image.flaticon.com/icons/svg/822/822144.svg" width="50px" />
                                <div class="card-body">
                                    <h5 class="card-title">การตรวจสุขภาพที่บ้าน</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-sm-6 col-xs-6">
                                <img src="https://image.flaticon.com/icons/svg/822/822160.svg" width="50px" />
                                <div class="card-body">
                                    <h5 class="card-title">เอกสารที่จำเป็น</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>


                            <div class="col-lg-3 col-sm-6 col-xs-6">
                                <img src="https://image.flaticon.com/icons/svg/822/822170.svg" width="50px" />
                                <div class="card-body">
                                    <h5 class="card-title">สายด่วน เหตุฉุกเฉิน</h5>
                                    <p class="card-text"></p>
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
