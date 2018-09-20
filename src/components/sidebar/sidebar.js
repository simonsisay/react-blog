import React, { Component } from 'react'
import { Layout} from 'antd';
import './sidebar.css'
import BookMarkedArticlesNav from './BookMarkedArticlesNav'
import UserNav from './UserNav'
import CategoriesNav from './CategoriesNav'
import { NavLink } from 'react-router-dom'


class Sidebar extends Component{
	render(){
		const { Sider } = Layout;
		return(
			<div className="sidebar">
			  <Layout>
			    <Sider
			      breakpoint="md"
			      collapsedWidth="0"
			    >
			    	<div className="sidebar-header">
						<NavLink activeClassName="active-nav" exact to="/"><h5>Home</h5></NavLink>
						<p>Blog</p>
					</div>
			    <div className="nav-container">
				     <UserNav />
				     <h6>Categories</h6>
				    	 <CategoriesNav />
				    <h6>Bookmarked articles</h6>
				     <BookMarkedArticlesNav />
				 </div>
			    </Sider>
			  </Layout>
		  </div>
		)
	}
}

export default Sidebar
 