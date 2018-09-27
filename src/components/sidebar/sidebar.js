import React, { Component } from 'react'
import { Layout} from 'antd';
import './sidebar.css'
import UserNav from './UserNav'
import CategoriesNav from './CategoriesNav'
import { NavLink } from 'react-router-dom'
import SignInUser from './SignInUser'
import { AuthContext } from '../../context/AuthProvider'



class Sidebar extends Component{
	constructor(props){
		super(props);
		this.state = {
			toggleSigninOptions:false
		}
	}

	openSignInOption = () => {
		this.setState({toggleSigninOptions:!this.state.toggleSigninOptions})
	}


	render(){
		const { Sider } = Layout;

		return(
			<div className="sidebar">
			  <Layout>
			    <Sider
			      breakpoint="md"
			      collapsedWidth="0"
			    >
			    <div className="nav-container">

			    <AuthContext.Consumer>
			    {(context) => (
			    		context.isAuthenticated ?
			    			<UserNav/> 
			    		: 
			    			<button 
				    			type="button" 
				    			className="btn btn-outline-green signin-btn"
				    			onClick={this.openSignInOption}
			    			>
			    			Sign in
			    		</button>
				    )
			    }
				</AuthContext.Consumer>
				{
					this.state.toggleSigninOptions ? 
					<SignInUser openSignInOption={this.openSignInOption}/> 
					: ''
				}
				  <div>
				 	   <h6>Categories</h6>
				      <CategoriesNav />
				   </div>
				 </div>
			    </Sider>
			  </Layout>
		  </div>
		)
	}
}

export default Sidebar
 