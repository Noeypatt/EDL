import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Content.css'
import {  Navbar, NavbarBrand } from 'reactstrap';


class Barin extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="Barin" >

                <Navbar bg-tranparent fixed-top light expand="lg">
                    <NavbarBrand href="/"><h5>ย้อนกลับ</h5></NavbarBrand>
                </Navbar>

            </div>
        );
    }

}
export default Barin;