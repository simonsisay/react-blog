import React, { Component } from 'react'
import {  Input } from 'reactstrap'
import { Card, CardHeader } from 'mdbreact'
import { Link } from 'react-router-dom'
import UserComments from './UserComments'
import axios from 'axios'


class CommentSection extends Component{

	deleteComment = (id) => {
		console.log('deleting ', id)
		axios({
			method:'delete',
			url:`https://ethblogi1.herokuapp.com/api/feedback//Delete/${id}`,
			headers:{
				authorization:this.props.token
			}
		})
		.then(response => {
			console.log(response)
		})
		.catch(error => {
			console.log(error)
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
									src={this.props.user.image} 
									className="comment-avatar" 
									alt="user pic"
								   />
									<a className="name">{this.props.user.full_name}</a>
							</div>
						</CardHeader>
			          <Input 
			       			className="textarea-form" 
			       			type="textarea" 
			       			name="blog" 
			       			value={this.props.newComment}
			       			onChange={this.handleInputChange}
			       			rows="4"
			       			cols="4"
			       			placeholder="write comment..."
			          		required
			          	/>
			          	<button 
			          		onClick={this.props.addNewComment}
			          		className="btn btn-sm btn-green">
			          		Comment
			          	</button>
					</Card>
				: 
					''
			 }
				<UserComments
					 deleteComment ={this.deleteComment}
					comments={this.props.comments}
					addNewComment={this.props.addNewComment}/>
			</div>

		)
	}
}

export default CommentSection