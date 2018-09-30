import React, { Component } from 'react';
import { Fa, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider'
import axios from 'axios'


class NavbarTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            readLater:[],
            favourite:[],
            spinner:false
        };
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    getFavourites = () => {
        this.setState({spinner:true})
        axios({
            method:'get',
            url:'https://ethblogi1.herokuapp.com/api/blog/get/Favorite',
            headers:{
                token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTA5LTMwVDA5OjIwOjUwLjkyNloiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTA5LTMwVDE1OjIwOjUwLjkyNloiLCJpYXQiOjE1MzgyOTkyNTB9.Nd8_l47EInei9Byw3_FYwcJpOn2m_qgtJaxKpjRhL58'
            },
        })
        .then(response => {
            console.log(response)
            this.setState({favourite:response.data[1].rows, spinner:false})
        })
    }

    getBookmarked = () => {
        this.setState({spinner:true})
        axios({
            method:'get',
            url:'https://ethblogi1.herokuapp.com/api/blog/get/readLater',
            headers:{
                token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTA5LTMwVDA5OjIwOjUwLjkyNloiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTA5LTMwVDE1OjIwOjUwLjkyNloiLCJpYXQiOjE1MzgyOTkyNTB9.Nd8_l47EInei9Byw3_FYwcJpOn2m_qgtJaxKpjRhL58'
            },
        })
        .then(response => {
            console.log(response)
            this.setState({readLater:response.data[1].rows, spinner:false})
        })
    }


    deleteFavourite = (id) => {
        const deletedList = this.state.favourite.filter(item =>  item.id !== id )
        this.setState({favourite:deletedList})
        axios({
            method:'delete',
            url:`https://ethblogi1.herokuapp.com/api/blog/Delete/Favorite/${id}`,
            headers:{
                token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTA5LTMwVDA5OjIwOjUwLjkyNloiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTA5LTMwVDE1OjIwOjUwLjkyNloiLCJpYXQiOjE1MzgyOTkyNTB9.Nd8_l47EInei9Byw3_FYwcJpOn2m_qgtJaxKpjRhL58'
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    

    deleteBookMarked = (id) => {
      const deletedList = this.state.favourite.filter(item =>  item.id !== id )
        this.setState({readLater:deletedList})
        axios({
            method:'delete',
            url:`https://ethblogi1.herokuapp.com/api/blog/Delete/readLater/${id}`,
            headers:{
                token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTA5LTMwVDA5OjIwOjUwLjkyNloiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTA5LTMwVDE1OjIwOjUwLjkyNloiLCJpYXQiOjE1MzgyOTkyNTB9.Nd8_l47EInei9Byw3_FYwcJpOn2m_qgtJaxKpjRhL58'
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

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
                          <NavItem className="nav-item-underline">
                            <Dropdown>
                                <DropdownToggle nav caret onClick={this.getBookmarked}>
                                    Saved for later
                                </DropdownToggle>

                                <DropdownMenu>
                                 {this.state.spinner 
                                ? 
                                    <Fa icon="spinner" spin size="2x" />
                                :
                                    this.state.readLater.map(item => (
                                        <div className="nav-dropdown-list" key={item.id}>
                                            <DropdownItem href="#" >{item.title}</DropdownItem>
                                            <Fa icon="close" onClick={() => this.deleteBookMarked(item.id)}/>
                                        </div>
                                    ))
                                }
                                </DropdownMenu>

                            </Dropdown>
                            </NavItem>
                            <NavItem>
                             <Dropdown>
                                <DropdownToggle nav caret onClick={this.getFavourites}>
                                    Favourites
                                </DropdownToggle>

                                 <DropdownMenu>
                                 {this.state.spinner 
                                ? 
                                    <Fa icon="spinner" spin size="2x" />
                                :
                                    this.state.favourite.map(item => (
                                        <div className="nav-dropdown-list" key={item.id}>
                                             <DropdownItem href="#" >{item.title}</DropdownItem>
                                             <Fa icon="close" onClick={() => this.deleteFavourite(item.id)}/>
                                        </div>
                                    ))
                                }
                                </DropdownMenu>

                            </Dropdown>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarTop