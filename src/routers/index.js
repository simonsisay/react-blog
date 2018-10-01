import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import Home from '../components/Home/home'
import Write from '../components/Write/Write'
import CategoryPage from '../components/CategoryPage/CategoryPage'
import UserPageContainer from '../components/UserProfile/UserPageContainer'
import BlogPage from '../components/BlogPage/BlogPage'
import Sidebar from '../components/sidebar/sidebar'
import NavbarTop from '../components/navbar/Navbar'


class Routes extends Component{
  render(){
      return(
          <Router>
             <div>
                 <NavbarTop />
                   <div className="main-container">
                   <Sidebar />
                   <Switch className="content">
                     <Route path="/" component={Home} exact />
                     <Route path="/write" component={Write} />
                     <Route path="/category/:category" exact component={CategoryPage} />
                     <Route path="/user/:name" component={UserPageContainer} />
                     <Route path="/blog/:id" component={BlogPage} />
                   </Switch>
                 </div>
               </div>
          </Router>
      )
  }
}


export default Routes