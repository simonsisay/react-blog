import React, { Component } from 'react'
import BlogReadPage from './BlogReadPage'
import { AuthContext }  from '../../context/AuthProvider'
import './blogRead.css'



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
				<AuthContext.Consumer>
				{(context) => (
					<BlogReadPage 
						isAuth={context.isAuthenticated}
						blogId={this.props.match.params.id} 
						token={context.token}
					/>
				 )
				}
				</AuthContext.Consumer>
			</div>
		)
	}
}

export default BlogPage