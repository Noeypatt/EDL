import React, { Component } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Content from '../Home/Content/Content'
import Service from './Content/Service'
import Footer from '../Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Allowance from './Content/Allowance';




class Home extends Component {
    render() {
        return (
            <div className="BG">
                <Header />
                <br/>
                <Content />
                <Allowance/>
                <Service />
                <Footer/>

            </div>
        )

    }
}
export default Home;