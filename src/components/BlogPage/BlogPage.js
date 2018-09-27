import React from 'react'
import BlogReadPage from './BlogReadPage'
import './blogRead.css'
import CommentSection from './CommentSection'


const BlogPage = (props) => {
	return(
		<div className="content">
			<BlogReadPage blogId={props.match.params.id} />
			<CommentSection />
		</div>
	)
}

export default BlogPage