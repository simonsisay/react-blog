import React, { Component } from 'react'
import {  Input } from 'reactstrap'
import { Card, CardHeader, Fa } from 'mdbreact'
import UserComments from './UserComments'


class CommentSection extends Component{

	render(){

			return(
			<div>
			{
				this.props.openComment
				?
					<Card className="comment-form">
						<CardHeader className="label cardHeader comment-header white-text p-2">
							<div className="">
									<img 
									src={this.props.user.image} 
									className="rounded-circle z-depth-1-half" 
									alt="user pic"
								   />
									<p className="name d-inline pl-2">{this.props.user.full_name}</p>
									{
										this.props.newCommentSpinner 
										? 
										<Fa icon="spinner" 
												spin size="2x" className="white-text"
											/> 
										: ''
									}
							</div>
						</CardHeader>
			          <Input 
			       			className="textarea-form" 
			       			type="textarea" 
			       			name="blog" 
			       			value={this.props.newComment}
			       			onChange={this.props.handleInputChange}
			       			rows="4"
			       			cols="4"
			       			placeholder="write comment..."
			          		required
			          	/>
			          	<button 
			          		onClick={this.props.addNewComment}
			          		className="btn btn-sm btn-indigo comment-button">
			          		Comment
			          	</button>
					</Card>
				: 
					''
			 }
				<UserComments
					deleteComment ={this.props.deleteComment}
					comments={this.props.comments}
					addNewComment={this.props.addNewComment}
					deleteSpinner={this.props.deleteSpinner}
					user={this.props.user}
					isAuth={this.props.isAuth}
				/>
			</div>

		)
	}
}

export default CommentSection