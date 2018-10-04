import React, { Component } from 'react'
import {  Input } from 'reactstrap'
import { Card, CardHeader } from 'mdbreact'
import { Link } from 'react-router-dom'
import UserComments from './UserComments'
import axios from 'axios'


class CommentSection extends Component{
	constructor(props){
		super(props)
		this.state = {
			newComment:'',
		}
	}



	handleInputChange = (e) => {
		this.setState({newComment:e.target.value})
	}

	addNewComment = () => {
		console.log(this.props.token)
		axios({
			method:'post',
			url:'https://ethblogi1.herokuapp.com/api/feedback/New',
			headers:{
				authorization:this.props.token
			},
			data:{
				blog_id:this.props.blogId,
				comments:this.state.newComment,
				user_id:this.props.userId
			}
		}).then(response => {
			console.log('comment', response)
			this.setState({newComment:''})
		})
	}



	render(){

			return(
			<div>
			{
				this.props.openComment
				?
					<Card className="comment-form">
						<CardHeader>
							<div className="label">
									<img 
									src="https://bootdey.com/img/Content/avatar/avatar6.png" 
									className="comment-avatar" 
									alt="user pic"
								   />
									<a className="name">Simon Sisay</a>
							</div>
						</CardHeader>
			          <Input 
			       			className="textarea-form" 
			       			type="textarea" 
			       			name="blog" 
			       			value={this.state.newComment}
			       			onChange={this.handleInputChange}
			       			rows="4"
			       			cols="4"
			       			placeholder="write comment..."
			          		required
			          	/>
			          	<button 
			          		onClick={this.addNewComment}
			          		className="btn btn-sm btn-green">
			          		Comment
			          	</button>
					</Card>
				: 
					''
			 }
				<UserComments comments={this.props.comments}/>
			</div>

		)
	}
}

export default CommentSection