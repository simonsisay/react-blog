import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/Home/home'
import Write from '../components/Write/Write'
import CategoryPageContainer from '../components/CategoryPage/CategoryPageContainer'
import UserPageContainer from '../components/UserProfile/UserPageContainer'
import BlogPage from '../components/BlogPage/BlogPage'
import Sidebar from '../components/sidebar/sidebar'
import NavbarTop from '../components/navbar/Navbar'
import SignInContainer from '../components/SignInContainer'
import NotFound from '../components/notFound'

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
                         <Route path="/category/:category" component={CategoryPageContainer} />
                         <Route path="/user/:name" component={UserPageContainer } />
                         <Route path="/blog/:id" component={BlogPage} />
                         <Route path="/sign-in" component={SignInContainer}  />
                         <Route component={NotFound} />
                       </Switch>

                 </div>
               </div>
          </Router>
      )
  }
}


export default Routes