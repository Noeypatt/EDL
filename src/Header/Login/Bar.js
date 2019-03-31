import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Header.css'
import {  Navbar, NavbarBrand } from 'reactstrap';


class Bar extends Component {

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
            <div className="Bar" >

                <Navbar bg-tranparent fixed-top light expand="lg">
                    <NavbarBrand href="/"><h3>Elderly</h3></NavbarBrand>
                </Navbar>

            </div>
        );
    }

}
export default Bar;