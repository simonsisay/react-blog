import React, { Component } from 'react'
import BlogReadPage from './BlogReadPage'
import './blogRead.css'
import CommentSection from './CommentSection'


class BlogPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			openComment:false
		}
	}




	render(){
		return(
			<div className="content blog-read-content">
				<BlogReadPage blogId={this.props.match.params.id} />
			</div>
		)
	}
}

export default BlogPage