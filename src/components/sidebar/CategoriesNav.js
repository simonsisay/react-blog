 import React from 'react'
 import { Menu } from 'antd'
 import { NavLink } from 'react-router-dom'

 const CategoriesNav = () => {
 	return (
 		<Menu className="menu" mode='inline' >
        <Menu.Item className="nav-item">
          <NavLink  activeClassName="active-nav" exact to="/category/design">Design</NavLink>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <NavLink activeClassName="active-nav" to="/category/art">Art</NavLink>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <NavLink  activeClassName="active-nav" to="/category/music">Music</NavLink>
        </Menu.Item>
        <Menu.Item className="nav-item">
         <NavLink activeClassName="active-nav" to="/category/movies">Movies</NavLink>
        </Menu.Item>
        <Menu.Item className="nav-item">
           <NavLink activeClassName="active-nav" to="/category/politics">Politics</NavLink>
        </Menu.Item>
	  </Menu>
 	)
 }

 export default  CategoriesNav
