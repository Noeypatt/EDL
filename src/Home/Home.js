import React, { Component } from 'react';
import './home.css';
import Header from '../Header/Header';
import Content from '../Header/Contents/Conhme'
import "../Header/Header.css"



class Home extends Component {
    render() {
        return (
            <div className="BG">

                <Header />

               
                <br /> <br /> <br /> <br />
                <br /> <br /> <br /> <br />
                <br /> <br /> <br /> <br />
                <br /> <br /> <br /> <br />
                <br /> <br /> <br /> <br />
                <br /> <br /> <br /> <br />
              
                



                <div className="home">
                    <div className="home" class="container-fluid">
                        <div class="row" >
                            <div class="col-lg-12 col-sm-12 " >
                                <a href="/App" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">เข้าสู่หน้าหลัก</a>
                            </div>
                        </div>
                        <br /> <br /> <br /> <br />
                    </div>
                </div>


            </div>
        )

    }
}
export default Home;
