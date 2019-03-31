import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css';
import GButton from './Contents/GButton'
import News from './Contents/News'


class Content extends Component {

    render() {
        return (
            <div className="con" >   
                <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-12" >
                        <GButton />
                        {/* <News/> */}
                        </div>
                    </div>
                </div>

                
            </div>



        );
    }
}
export default Content;
