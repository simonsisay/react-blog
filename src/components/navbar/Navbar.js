import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse} from 'mdbreact';
import { AuthContext } from '../../context/AuthProvider'
import NavDropDown from './navDropdown'



class NavbarTop extends Component {
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
            <div>
                <Navbar  dark expand="md" scrolling className="navbar fixed-top">
                 <NavbarBrand href="/">
                      <strong className="brandName font-weight-bold">Blogii</strong>
                  </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                        <AuthContext.Consumer>
                        {context => (
                            <NavDropDown 
                                token={context.token}
                            />
                        )
                        }
                        </AuthContext.Consumer>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarTop