//หน้าเริ่มต้น
import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import Bar from '../Header/Bar';
import Allowance from './Content/Allowance';
import Service from './Content/Service'
import Footer from '../Footer/Footer'



class Home extends Component {
    render() {
        return (
            <div>
                <Card className="BG " >
                    <Bar />

                    <div class="container top front " expand="xs">
                        <div className="row">

                            <div className="col-lg-12 col-sm-12 ">
                                <CardTitle><h1 className="frontH">Elderly DataBase</h1></CardTitle>
                                <CardSubtitle>เว็บไซต์เเสดงจำนวนประชากร เเละข่าวสารเกี่ยวกับผู้สูงอายุ</CardSubtitle><br />
                                <a href="/App" className="btn btn-primary btn-md active " role="button" aria-pressed="true">
                                    <h5 className="frontbutton">เข้าสู่เว็บไซต์</h5>
                                </a>
                            </div>

                        </div>
                    </div>
                    <br />
                </Card>
                <br />
                <Allowance /> <br /> <br /><br />
                <Service />
                <Footer />

            </div>
        )

    }
}
export default Home;