import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Home.css'

class Content extends Component {

    render() {
        return (
            <div  >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                        </div>

                        <div className="col-lg-6">
                            <div className="jumbotron" id="Block">
                                <div className="jumbotron-inner">
                                    <div className="jumbotron-item active">
                                        <div className="jumbotron-caption d-none d-lg-block active">
                                            <h1>Elderly DataBase</h1>
                                            <h5 className="lead"> เว็บไซต์เเสดงจำนวนประชากร เเละข่าวสารเกี่ยวกับผู้สูงอายุ </h5><br/>
                                            <a href="/App" className="btn btn-primary btn-md active"  role="button" aria-pressed="true"><h5>เข้าสู่เว็บไซต์</h5></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                        </div>
                        
                    </div>
                </div>


            </div>



        );
    }
}
export default Content;
