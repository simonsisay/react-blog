import React, { Component } from 'react'
import ArticleList from '../common/articleList'
import './home.css'
import { Fa } from 'mdbreact'
import axios from 'axios'

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			allBlog:[],
			recentArticles:[],
			trendingArticles:[],
			errorMessage:''

		}
	}

	componentDidMount(){
		axios.get('https://ethblogi1.herokuapp.com/api/blog/all')
		.then(response => {
			this.setState({allBlog:response.data[1].rows})

			console.log(this.state.allBlog)


			const latestFive = this.state.allBlog.sort((a, b) => (
				 a.createdAt < b.createdAt
			)).slice(0, 5)

			const trendingFive = this.state.allBlog.sort((a, b) => (
				a.likes < b.likes
			)).slice(0, 5)

			this.setState({trendingArticles:trendingFive, recentArticles:latestFive})

		}).catch(() => {
			this.setState({errorMessage:'Something went wrong . Please refresh the page !'})
		})

		// axios({
		// 	method:'get',
		// 	url:'https://ethblogi1.herokuapp.com/api/blog/get/readLater',
		// 	headers:{
		// 		token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMyMmQyM2UwLWY3NGYtNDllOS1iNTg3LWFhNTJlMjIyNzFiOCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTA5LTI1VDA5OjU1OjMyKzAwOjAwIiwiZXhwaXJlZF9kYXRlIjoiMjAxOC0wOS0yNVQxNTo1NTozMi40MzNaIiwiaWF0IjoxNTM3ODY5MzMyfQ.aiSuVrPnx5M251DjBe8Iv8ic-PRv55WC-sjkwNRtFQc'

		// 	}
		// }).then(response => {
				
		// }).catch(error => console.log(error))
  }




	render(){
		return(
			<div className="content home-container">
			{this.state.errorMessage ? <h4>{this.state.errorMessage}</h4>
			:
			this.state.allBlog.length === 0 ? 
				<Fa className="spinner-icon" icon="spinner" spin size="3x" />

			: 
					<div className="home">
						<div className="trending-articles">
							<ArticleList 
								title={'Trending Articles'}
								blogs={this.state.trendingArticles}
							/>
						</div>
						<div className="trending-articles">
							<ArticleList 
								title={'Recent Articles'}
								blogs={this.state.recentArticles}
							/>
						</div>

					</div>
			}
			</div>
		)
	}
}

export default Home