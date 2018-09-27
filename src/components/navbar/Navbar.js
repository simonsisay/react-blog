import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider'


class NavbarTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <Router>
                <Navbar  dark expand="md" scrolling className="navbar fixed-top">
                 <NavbarBrand href="/">
                      <strong className="brandName font-weight-bold">Blogii</strong>
                  </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                          <NavItem className="nav-item-underline">
                            <Dropdown>
                                <DropdownToggle nav caret>Bookmarked</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">Action</DropdownItem>
                                    <DropdownItem href="#">Another Action</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            </NavItem>
                            <NavItem>
                             <Dropdown>
                                <DropdownToggle nav caret>Favourites</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">Action</DropdownItem>
                                    <DropdownItem href="#">Another Action</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default NavbarTop