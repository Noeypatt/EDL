import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Jumbotron } from 'reactstrap';
import './Content.css'

class Content extends Component {

    render() {
        return (
            <div >
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-7">

                        </div>
                        <div class="col-lg-4">
                            <div class="jumbotron" id="Block">
                                <div class="jumbotron-inner">
                                    <div class="jumbotron-item active">
                                        <div class="jumbotron-caption d-none d-lg-block active">
                                            <h1>Elderly DataBase</h1><br />
                                            <p className="lead"> เว็บไซต์เเสดงจำนวนประชากร เเละข่าวสารเกี่ยวกับ<br />ผู้สูงอายุ </p><br />
                                            <a href="/App" class="btn btn-primary btn-lg active"  role="button" aria-pressed="true">เข้าสู่เว็บไซต์</a>
                                        </div>
                                    </div>
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
export default Content;
