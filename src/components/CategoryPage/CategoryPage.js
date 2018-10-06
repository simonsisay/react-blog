import React, { Component } from 'react'
import "./category.css"
import ArticleList from '../common/articleList'
import axios from 'axios'
import { Fa } from 'mdbreact'
import { AuthContext } from '../../context/AuthProvider'

class CategoryPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			blogs:[],
			category:'',
			spinnerOn:false,
			errorMessage:'',
			following:false,
			trendingArticles:[],
			recentArticles:[],
		}
	}


	componentDidMount(){
		this.setState({category:this.props.category, spinner:true})

		axios.get(`https://ethblogi1.herokuapp.com/api/blog/all/Category/${this.props.category}`)

		.then(response => {
			this.setState({blogs:response.data[1].rows, spinner:false})

		   const latestFive = this.state.blogs.sort((a, b) => {
				return a.createdAt < b.createdAt ? 1 : -1
			}).slice(0, 5)

			const trendingFive = this.state.blogs.sort((a, b) => {
				return a.like < b.like ? 1 : -1
			}).slice(0, 5)

			this.setState({trendingArticles:trendingFive, recentArticles:latestFive})


		}).catch(error => {
			console.log(error)
			this.setState({errorMessage:'Something went wrong . Please refresh the page !'})
		})

		if(this.props.isAuth){
			axios({
				method:'post',
				url:'https:ethblogi1.herokuapp.com/api/Check/Category',
				headers:{
					authorization:this.props.token
				},
				data:{
					category:this.props.category
				}
			})
			.then(response => {
				this.setState({following:response.data.following === 0 ? false : true})

			}).catch(error => console.log(error))
		}

	}



	FollowOrUnfollowCategory = () => {
		this.setState({following: !this.state.following})
		if(this.state.following){
			axios({
			method:'delete',
			url:'https://ethblogi1.herokuapp.com/api/Unfollow/Category',
			headers:{
				authorization:this.props.token
			},
			data:{
				category:this.state.category
			}
		})
			.then(response => {
				console.log(response)
			}).catch(e=>console.log(e))
		}

		else {
			axios({
				method:'post',
				url:'https://ethblogi1.herokuapp.com/api/Follow/Category',
				headers:{
					authorization:this.props.token
				},
				data:{
					category:this.state.category
				}
			})
			.then(response => {
				console.log(response)
			}).catch(e => console.log(e))
		}
	}



	render(){
		return(
			<div className="content">
				<div className="category-header">
				<h2 className="h2-responsive category-name font-weight-bold">{this.state.category.toUpperCase()}</h2>
			<AuthContext.Consumer>
			{context => 
				context.isAuthenticated 
				? 	
					<button 
						className="btn btn-sm btn-outline-green" 
						onClick={this.FollowOrUnfollowCategory}>
							{this.state.following ? 'Unfollow' : 'Follow'}
					</button>
			: 
				''
			}
			</AuthContext.Consumer>
			</div>
				{  
					this.state.errorMessage 
				? 
					<h4 className="error-message">{this.state.errorMessage}</h4>
				:
					this.state.spinner 
					? 
						<Fa className="spinner-icon" icon="spinner" spin size="3x" />
					:  
					this.state.blogs.length === 0 
					?
						 <h4>No article is written in this category</h4>
					:
						<div>
							<h4 className="h5-responsive font-weight-bold pl-2">Trending</h4>
							<ArticleList blogs={this.state.trendingArticles} /> 	

							<h4 className="h5-responsive font-weight-bold pl-2">Recent</h4>
							<ArticleList blogs={this.state.recentArticles} /> 
						</div>
				}
			</div>
		)
	}
}

export default CategoryPage