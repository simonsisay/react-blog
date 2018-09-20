import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/Home/home'
import Write from '../components/Write/Write'
import CategoryPage from '../components/CategoryPage/CategoryPage'
import UserPage from '../components/UserProfile/UserPage'
import BlogPage from '../components/BlogPage/BlogPage'
import Sidebar from '../components/sidebar/sidebar'

const Routes = () => {
	return(
		<Router>
      <div className="main-container">
        <Sidebar />
  			<Switch className="content">
  				<Route path="/" component={Home} exact />
  				<Route path="/write" component={Write} />
  				<Route path="/category" component={CategoryPage} />
  				<Route path="/user" component={UserPage} />
  				<Route path="/blog" component={BlogPage} />
  			</Switch>
      </div>
		</Router>
	)
}


export default Routes