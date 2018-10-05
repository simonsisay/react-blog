import React from 'react'
import BlogReadPage from './BlogReadPage'
import { AuthContext }  from '../../context/AuthProvider'
import './blogRead.css'



const BlogPage = (props) =>  {
	   console.log(props)
		return(
			<div className="content blog-read-content">
				<AuthContext.Consumer>
				{(context) => (
					<BlogReadPage 
						isAuth={context.isAuthenticated}
						blogId={props.match.params.id} 
						token={context.token}
						user={context.user}
						writer={props.location.state.writer}
					/>
				 )
				}
				</AuthContext.Consumer>
			</div>
		)
}

export default BlogPage