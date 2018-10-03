import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'mdbreact'

const UserComments = (props) => {

		return(
		 	<div className="user-comments-container">
		 	{		 	
		 	props.comments.length === 0
		 	? 
		 		<h5>no comments on this post yet . </h5>
		 	:
		 	props.comments.map(comment => 
		    <div>
				<h6 className="font-weight-bold mb-2">Comments</h6>
				<Card className="news">
	              <CardHeader className="label cardHeader">
	                <img 
		                src={comment.image} 
		                className="rounded-circle z-depth-1-half"
		                alt='comment'
	               	/>
	                  <div className="comment-name">
		                  <a className="name">{comment.user}</a> 
		                  <span className="date">{comment.createdAt}</span>
		               </div>
	                </CardHeader>

	               <CardBody>
		                <div className="added-text">
		                	{comment.comment}
		                </div>
		             </CardBody>
	            </Card>
	         </div>
		 	)
	      }
			</div>
		)
}

export default UserComments
