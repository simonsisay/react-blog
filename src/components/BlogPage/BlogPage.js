import React, { Component } from 'react'
import BlogReadPage from './BlogReadPage'
import { AuthContext }  from '../../context/AuthProvider'
import './blogRead.css'



class BlogPage extends Component {

	// componentWillReceiveProps(nextProps){
	// 	if(this.props.location.state.id !== nextProps.location.state.id){
	// 		window.location.reload();
	// 	}
	// }


	render(){
		return(
			<div className="content blog-read-content">
				<AuthContext.Consumer>
				{(context) => (
					<BlogReadPage 
						isAuth={context.isAuthenticated}
						blogId={this.props.match.params.id} 
						token={context.token}
						user={context.user}
					/>
				 )
				}
				</AuthContext.Consumer>
			</div>
		)
	}
}

export default BlogPage