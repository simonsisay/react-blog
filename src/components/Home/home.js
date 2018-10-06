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
			const latestFive = this.state.allBlog.sort((a, b) => {
				return a.createdAt < b.createdAt ? 1 : -1
			}).slice(0, 5)

			const trendingFive = this.state.allBlog.sort((a, b) => {
				return a.like < b.like ? 1 : -1
			}).slice(0, 5)

			this.setState({
				trendingArticles:trendingFive, 
				recentArticles:latestFive, 
				errorMessage:this.state.allBlog.length === 0 ? 'No article has been written yet !' : ''
		})

		}).catch(() => {
			this.setState({errorMessage:'Something went wrong . Please refresh the page !'})
		})
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