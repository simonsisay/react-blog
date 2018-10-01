import React, { Component } from 'react'
import { Layout} from 'antd';
import './sidebar.css'
import UserNav from './UserNav'
import CategoriesNav from './CategoriesNav'
import { NavLink } from 'react-router-dom'
import SignInUser from './SignInUser'
import { AuthContext } from '../../context/AuthProvider'
import Search from './Search'
import axios from 'axios'
import SearchList from './SearchList'


class Sidebar extends Component{
	constructor(props){
		super(props);
		this.state = {
			toggleSigninOptions:false,
			searchInput:'',
			searchResult:[]
		}
	}


	handleSearchChange = (event) => {
		this.setState({searchInput:event.target.value})
	}

	getSearchResult = (e) => {
		e.preventDefault();
		axios.get(`https://ethblogi1.herokuapp.com/api/blog/all/Title/${this.state.searchInput}`)
		.then(response => {
			console.log(response)
			this.setState({searchResult:response.data[1].rows})
		})
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
			    			<UserNav 
			    				image={context.user.image}
			    			/> 
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
					<Search 
						handleInputChange={this.handleSearchChange}
						value={this.state.searchInput}
					/>
					{this.state.searchResult.length !== 0 
					?
						<SearchList searchResult={this.state.searchResult} search={this.getSearchResult}/>
					: ''
					}
				</div>
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
 