import React, { Component } from 'react';
import '../Content.css'
// import { Tooltip } from 'reactstrap';
/*
import K from './Map/3.png' //กะทู้
import T from './Map/4.png' //ถลาง
import M from './Map/2.png' //เมือง
*/
import Map from './Map/map.png'
import Namelist from './Data/Namelist'

class Chart extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        return (
            <div className="font" >

                <div class="container-fluid" >
                <div class="row">
                <div className="animated zoomIn delay-2s col-lg-12">
                <h1>ระบบฐานข้อมูลผู้สูงอายุ ประจำจังหวัดภูเก็ต</h1><br/>
                </div>
                </div>
                    <div class="row" >
                        <div class="animated zoomIn delay-3s col-lg-6" >
                            <img src={Map} width="150px" />
                        </div>

                        <div id="click" class="col-lg-6" >
                            <br/><br/><br/>
                            <Namelist/>

                                {/* <img src={K} width="55px" /><br />
                                <img src={T} width="100px" /><br />
                                <img src={M} width="50px" /> */}

                         
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Chart
