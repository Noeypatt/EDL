import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Header.css'
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';



class Baremail extends Component {

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

                <Navbar className="Barin" bg-transparent fixed-top light expand="md">
                    <NavbarBrand href="/"><h3 className="head">Elderly</h3></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                </Navbar>
            </div>
        );
    }

}
export default Baremail;