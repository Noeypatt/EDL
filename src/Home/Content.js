import React, { Component } from 'react';
import './Home.css';
import { Jumbotron, Button } from 'reactstrap';

class Content extends Component {

    render() {
        return (
            <div className="con" >
                <div class="container-fluid" >
                    <div  class="row" >

                        <div class="col-lg-6 col-xs-12" >
                        </div>

                        <div class="col-lg-5 col-xs-12" >
                            <h1>Elderly DataBase</h1><br />
                            <h4>เว็บไซต์เเสดงจำนวนประชากร เเละข่าวสารเกี่ยวกับผู้สูงอายุ </h4><br />
                            <h5></h5>
                            <br />
                            <br />
                        </div>

                        <div class="col-lg-1 col-xs-12" >

                            <br />
                        </div>

                    </div>

                    <div  class="row" >
                        <div class="col-lg-7 col-xs-12" >
                        </div>

                        <div class="col-lg-3 col-xs-12" >
                        <a href="/App" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">เข้าสู่เว็บไซต์</a>
                            <br />
                        </div>

                        <div class="col-lg-2 col-xs-12" >
                        </div>

                    </div>
                </div>

            


            </div>



        );
    }
}
export default Content;
