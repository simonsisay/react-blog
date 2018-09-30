import React from 'react'
import Blog from '../common/Blog'

const ArticleList = (props) => {
	return (
		<div className="trending-articles-list">
			 <h2 className="h1-responsive font-weight-bold text-center my-5">{props.title}</h2>
			<div className="articles-list">
			{props.blogs.map(blog => (
						<Blog
							key={blog.id}
							title={blog.title} 
							category={blog.category}
							image={blog.image}
							blog={blog.content}
							createdAt={blog.createdAt}
							id={blog.id}
							userId={blog.user_id}
					/>
				))}
		</div>
	</div>
	)
}

export default ArticleList