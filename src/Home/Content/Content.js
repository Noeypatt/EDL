import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Jumbotron } from 'reactstrap';
import '../Home.css';

class Content extends Component {

    render() {
        return (
            <div id="Con" >
                <div id="Con" class="container-fluid">
                    <div class="row">
                        <div class="col-lg-7 col-sm-2">

                        </div>
                        <div class="col-lg-4 col-sm-8">
                            <Jumbotron id="Block">
                                <h1>Elderly DataBase</h1><br />
                                <h4 className="lead"> เว็บไซต์เเสดงจำนวนประชากร เเละข่าวสารเกี่ยวกับผู้สูงอายุ </h4><br />
                                <a href="/App" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">เข้าสู่เว็บไซต์</a>
                                <br />
                            </Jumbotron >
                        </div>

                        <div class="col-lg-1 col-sm-2">

                        </div>

                    </div>



                </div>

            </div>



        );
    }
}
export default Content;
