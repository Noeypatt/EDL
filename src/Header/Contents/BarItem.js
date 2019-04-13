import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Header.css'
import { Navbar, NavbarBrand } from 'reactstrap';



class BarItem extends Component {

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
                </Navbar>
            </div>
        );
    }

}
export default BarItem;