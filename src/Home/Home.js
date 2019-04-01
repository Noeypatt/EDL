import React, { Component } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Content from '../Home/Content/Content'
import Service from './Content/Service'
import 'bootstrap/dist/css/bootstrap.min.css'




class Home extends Component {
    render() {
        return (
            <div className="BG">
                <Header />
                <br/>
                <Content />
                <Service />


            </div>
        )

    }
}
export default Home;