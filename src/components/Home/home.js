import React, { Component } from 'react'
import TrendingArticles from '../common/TrendingArticles'
import './home.css'
import RecentArticles from '../common/RecentArticles'
import BookmarkedCard from './bookmarked'
import FavouriteCard from './Favourite'



class Home extends Component {
	render(){
		return(
			<div className="content home-container">
				<div className="home">
					<div className="trending-articles">
						<TrendingArticles />
					</div>
					<div className="recent-articles">
						<RecentArticles />
					</div>
				</div>
				<div className="bookmarked-recent">
					<BookmarkedCard />
					<FavouriteCard />
				</div>

			</div>
		)
	}
}

export default Home