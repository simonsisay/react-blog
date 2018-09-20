import React, { Component } from 'react'
import TrendingArticles from '../common/TrendingArticles'
import './home.css'
import RecentArticles from '../common/RecentArticles'


class Home extends Component {
	render(){
		return(
			<div className="content home">
				<div className="trending-articles">
					<TrendingArticles />
				</div>
				<div className="recent-articles">
					<RecentArticles />
				</div>
			</div>
		)
	}
}

export default Home