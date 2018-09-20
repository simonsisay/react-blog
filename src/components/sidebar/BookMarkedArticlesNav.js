import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'


const BookMarkedArticlesNav = () => {
	return(
		<Menu className="menu bookmared-articles" mode='inline' >
	        <Menu.Item className="nav-item">
	          <NavLink  activeClassName="active-nav" exact to="/blog">Life of the news</NavLink>
	        </Menu.Item>
	  </Menu>
	)
}

export default BookMarkedArticlesNav