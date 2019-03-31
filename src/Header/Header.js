import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
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
            <div >
                <Navbar bg-tranparent fixed-top light expand="lg">
                    <NavbarBrand id="Bar" href="/"><h3>Elderly</h3></NavbarBrand>
                    <NavbarToggler  onClick={this.toggle} />
                    <Collapse id = "Toggle" isOpen={this.state.isOpen} navbar>
                        <Nav id="name" className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/App">หน้าหลัก</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">เกี่ยวกับ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">ติดต่อ</NavLink>
                            </NavItem>
                            <UncontrolledDropdown  nav inNavbar>
                                <DropdownToggle nav caret>
                                    Login
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/Addmin">
                                        Admin
                                    </DropdownItem>
                                    <DropdownItem href="/Person">
                                        Person
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        วิธีการใช้งาน
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