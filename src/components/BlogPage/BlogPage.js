import React from 'react'
import BlogReadPage from './BlogReadPage'
import './blogRead.css'
import CommentSection from './CommentSection'


const BlogPage = () => {
	return(
		<div className="content">
			<BlogReadPage />
			<CommentSection />
		</div>
	)
}

export default BlogPage