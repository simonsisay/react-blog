import React from 'react'
import Blog from '../common/Blog'

const RecentArticles = () => {
	return (
		<div>
			 <h2 className="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
			<div className="trending-articles">
				<Blog />
				<Blog />
				<Blog />
				<Blog />
			</div>
		</div>
	)
}

export default RecentArticles