import React, { Component } from 'react';
import '../Content.css'
// import { Tooltip } from 'reactstrap';
import K from './Map/3.png' //กะทู้
import T from './Map/4.png' //ถลาง
import M from './Map/2.png' //เมือง
import Map from './Map/map.png'

class Chart extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <div className="Map">
                <div class="container-fluid" >
                    <div class="row" >
                        <div class="animated fadeInLeft delay-1s col-lg-12" >
                            <img src={Map} width="20%"  />
                        </div>
                    </div>
                    <div class="row" >
                        <div class="animated fadeInLeft delay-1s col-lg-4" >
                            <span id="TooltipExample"><img id="picmap" src={K} width="55%" /></span>
                            {/* <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle} >
                                อำเภอ กะทู้
                            </Tooltip> */}

                        </div>

                        <div class="col-lg-4 animated fadeIn delay-1s" >
                            <span id="TooltipExample"><img id="picmap" src={T} width="100%" /></span>
                            {/* <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle} >
                                อำเภอ ถลาง
                            </Tooltip> */}
                        </div>

                        <div class="col-lg-4 animated fadeInRight delay-1s" >
                            <span id="TooltipExample"><img id="picmap" src={M} width="50%" /></span>
                            {/* <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle} >
                                อำเภอ เมือง
                            </Tooltip> */}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Chart
