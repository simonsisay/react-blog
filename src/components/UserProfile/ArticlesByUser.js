import React from 'react'
import Blog from '../common/Blog'


const ArticlesByUser = (props) => {
	return(
		<div className="articles-by-user">
			<h3>Posts by Simon Sisay</h3>
			<hr />
			<Blog />
			<Blog />
			<Blog />
		</div>
	)
}

export default ArticlesByUser