 import React from 'react'
 import { Menu } from 'antd'
 import { NavLink } from 'react-router-dom'

 const CategoriesNav = () => {
 	return (
 		<Menu className="menu" mode='inline' >
        <Menu.Item className="nav-item">
          <NavLink  activeClassName="active-nav" exact to="/category">Css</NavLink>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <NavLink activeClassName="active-nav" to="/category">Javascript</NavLink>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <NavLink  activeClassName="active-nav" to="/category">React</NavLink>
        </Menu.Item>
        <Menu.Item className="nav-item">
         <NavLink activeClassName="active-nav" to="/category">Node</NavLink>
        </Menu.Item>
	  </Menu>
 	)
 }

 export default  CategoriesNav
