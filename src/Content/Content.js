import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css';
import Map from './Charts/Elderly'
import Namelist from './Contents/Namelist';



class Content extends Component {

    render() {
        return (
            <div>   
                <br/>
                <Map/>
                <br/>
                <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-12" >
                            <Namelist/>
              
                        </div>
                    </div>
                </div>

                
            </div>



        );
    }
}
export default Content;
