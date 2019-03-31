import React, { Component } from 'react';
import { Jumbotron} from 'reactstrap';
import '../Home.css';

class Content extends Component {

    render() {
        return (
            <div className="con" >
          <br/>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-2">

                        </div>
                        <div class="col-lg-6 col-sm-10">
                            <Jumbotron expand="lg">
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
