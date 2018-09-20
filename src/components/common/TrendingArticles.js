import React from 'react'
import Blog from '../common/Blog'

const TrendingArticles = () => {
	return (
		<div className="trending-articles">
			 <h2 className="h1-responsive font-weight-bold text-center my-5">Trending posts</h2>
			<div className="trending-articles">
				<Blog />
				<Blog />
				<Blog />
				<Blog />
			</div>
		</div>
	)
}

export default TrendingArticles