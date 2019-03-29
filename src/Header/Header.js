import React, { Component } from 'react';
import './Header.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Header extends Component {

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
                    <NavbarBrand href="/"><h5>Elderly</h5></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav id="name" className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">หน้าหลัก</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">เกี่ยวกับ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">ติดต่อ</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Login
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Admin
                                    </DropdownItem>
                                    <DropdownItem>
                                        Person
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

            </div>
        );
    }

}
export default Header;