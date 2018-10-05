import React from 'react'
import Blog from '../common/Blog'
import { AuthContext } from '../../context/AuthProvider'


const ArticleList = (props) => {
	console.log(props)
	return (
		<div className="trending-articles-list">
			 <h2 className="h1-responsive font-weight-bold text-center my-5">{props.title}</h2>
			<div className="articles-list">

			<AuthContext.Consumer>
			{(context) => (
				<div>
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
						isAuth={context.isAuthenticated}
						token={context.token}
						writer={blog.user.full_name}
					/>
				))}
			 </div>
			)}
			</AuthContext.Consumer>
		</div>
	</div>
	)
}

export default ArticleList