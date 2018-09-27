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
			errorMessage:''
		}
	}


	componentWillMount(){
		const category = this.props.match.params.category
		this.setState({category:category, spinner:true})
		axios.get(`https://ethblogi1.herokuapp.com/api/blog/all/Category/${category}`)
		.then(response => {
			this.setState({blogs:response.data[1].rows, spinner:false})
			console.log(response.data[1].rows)
		}).catch(error => {
			console.log(error)
			this.setState({errorMessage:'Something went wrong . Please refresh the page !'})
		})
	}

	followCategory = () => {
				axios({
					method:'post',
					url:'https://ethblogi1.herokuapp.com/api/Follow/Category',
					headers:{
						token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxNmQyOTY4LTQ0NTgtNDJhYS1iNmY2LWQ2YWY5Y2VlMjk3OCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTA5LTI1VDA5OjE3OjU1KzAwOjAwIiwiZXhwaXJlZF9kYXRlIjoiMjAxOC0wOS0yNVQxNToxNzo1NS42MjNaIiwiaWF0IjoxNTM3ODY3MDc1fQ.Qbv8l0Wn1Ye6Alh8NeTX4gXsE9YrQk0djBn0BcqDOA8'
					},
					data:{
						category:this.state.category
					}
				})
				.then(response => {
					console.log(response)
				})
	}

	render(){
		return(
			<div className="content">
				<div className="category-header sticky-top">
					<h2 className="h2-responsive category-name font-weight-bold">{this.state.category.toUpperCase()}</h2>
					<button className="btn btn-sm btn-outline-green" onClick={this.followCategory}>Follow</button>
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
						<ArticleList blogs={this.state.blogs} /> 	
				}
			</div>
		)
	}
}

export default CategoryPage