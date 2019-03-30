import React, { Component } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Content from './Content'




class Home extends Component {
    render() {
        return (
            <div className="BG">
                <Header />
                <br/><br/>
                <Content/>

                
            </div>
        )

    }
}
export default Home;
