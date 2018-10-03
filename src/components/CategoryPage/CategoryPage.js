import React, { Component } from 'react'
import Blog from '../common/Blog'
import "./category.css"
import ArticleList from '../common/articleList'
import axios from 'axios'
import { Fa } from 'mdbreact'


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
			following:false
		}
	}


	componentWillMount(){
		const category = this.props.match.params.category
		this.setState({category:category, spinner:true})


		axios.get(`https://ethblogi1.herokuapp.com/api/blog/all/Category/${category}`)

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

		axios({
			method:'post',
			url:'https:ethblogi1.herokuapp.com/api/Check/Category',
			headers:{
					token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTEwLTAyVDA5OjE1OjA3LjYzN1oiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTEwLTAyVDE1OjE1OjA3LjYzN1oiLCJpYXQiOjE1Mzg0NzE3MDd9.lP2UpZQjrTXsyhSs-8QXito2AlSKGZDC5NQPhVs3VVQ',
			},
			data:{
				category:category
			}
		})
		.then(response => {
			console.log(response)
			this.setState({following:response.data.following === 0 ? false : true})

		}).catch(error => console.log(error))

	}



	FollowOrUnfollowCategory = () => {
		this.setState({following: !this.state.following})
		if(this.state.following){
			axios({
			method:'delete',
			url:'https://ethblogi1.herokuapp.com/api/Unfollow/Category',
			headers:{
					token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTEwLTAyVDA5OjE1OjA3LjYzN1oiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTEwLTAyVDE1OjE1OjA3LjYzN1oiLCJpYXQiOjE1Mzg0NzE3MDd9.lP2UpZQjrTXsyhSs-8QXito2AlSKGZDC5NQPhVs3VVQ',
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
					token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTEwLTAyVDA5OjE1OjA3LjYzN1oiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTEwLTAyVDE1OjE1OjA3LjYzN1oiLCJpYXQiOjE1Mzg0NzE3MDd9.lP2UpZQjrTXsyhSs-8QXito2AlSKGZDC5NQPhVs3VVQ',
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
				<div className="category-header sticky-top">
					<h2 className="h2-responsive category-name font-weight-bold">{this.state.category.toUpperCase()}</h2>
					<button 
						className="btn btn-sm btn-outline-green" 
						onClick={this.FollowOrUnfollowCategory}>
							{this.state.following ? 'Unfollow' : 'Follow'}
					</button>
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
					this.state.blogs.length == 0 
					?
						 <h4>No article written in this category</h4>
					:
						<div>
							<h4 className="h5-responsive font-weight-bold text-center">Trending</h4>
							<ArticleList blogs={this.state.trendingArticles} /> 	

							<h4 className="h5-responsive font-weight-bold">Recent</h4>
							<ArticleList blogs={this.state.recentArticles} /> 
						</div>
				}
			</div>
		)
	}
}

export default CategoryPage