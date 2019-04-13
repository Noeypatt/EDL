import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css';
import Map from './Charts/Elderly'
import Sheets from './Charts/Data/Sheets'





class Content extends Component {

    render() {
        return (
            <div className="Map">   
                <br/><br/>
                <Map/>
                <br/>
                <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-12" >
                           <Sheets/>
              
                        </div>
                    </div>

                    <div class="row" >
                        <div class="col-lg-12" >
                         
                        </div>
                    </div>
                </div>

                
            </div>



        );
    }
}
export default Content;
