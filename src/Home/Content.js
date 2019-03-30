import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Home.css';

class Content extends Component {

    render() {
        return (
            <div className="con" >
          <br/>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-xs-12">

                        </div>
                        <div class="col-lg-6 col-xs-12">
                            <Jumbotron>

                                <h1>Elderly DataBase</h1><br />
                                <h4 className="lead"> เว็บไซต์เเสดงจำนวนประชากร เเละข่าวสารเกี่ยวกับผู้สูงอายุ </h4><br />
                                <a href="/App" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">เข้าสู่เว็บไซต์</a>
                                <br />
                            </Jumbotron >
                        </div>
                    </div>



                </div>

            </div>



        );
    }
}
export default Content;
