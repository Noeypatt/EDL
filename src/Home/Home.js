import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../Header/Header';
import Content from '../Home/Content/Content'
import Service from './Content/Service'
import Footer from '../Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Allowance from './Content/Allowance';
import Hospital from './Content/Hospital';




class Home extends Component {
    render() {
        return (
            <div className="BG">
                <Header />
                <br/>
                <Content />
                <Allowance/>
                {/* <Hospital/> */}
                <Service />
                <Footer/>

            </div>
        )

    }
}
export default Home;