import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'


const BookMarkedArticlesNav = () => {
	return(
		<Menu className="menu" mode='inline' >
	        <Menu.Item className="nav-item">
	          <NavLink  activeClassName="active-nav" exact to="/">Home</NavLink>
	        </Menu.Item>
	        <Menu.Item className="nav-item">
	          <NavLink activeClassName="active-nav" to="/user">User</NavLink>
	        </Menu.Item>
	        <Menu.Item className="nav-item">
	         <NavLink activeClassName="active-nav" to="/write">Write</NavLink>
	        </Menu.Item>
	  </Menu>
	)
}

export default BookMarkedArticlesNav