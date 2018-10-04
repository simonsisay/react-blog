import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Fa } from 'mdbreact'

const UserComments = (props) => {

		return(
		 	<div className="user-comments-container">
		 	{		 	
		 	props.comments.length === 0
		 	? 
		 		<h5>no comments on this post yet . </h5>
		 	:
		 	props.comments.map(comment => 
		    <div key={comment.id}>
				<Card className="news">
	              <CardHeader className="label cardHeader">
	                <img 
		                src={comment.image} 
		                className="rounded-circle z-depth-1-half"
		                alt='comment'
	               	/>
	                  <div className="comment-name">
		                  <a className="name">{comment.name}</a> 
		                  <small className="date">{comment.createdAt}</small>
		               </div>
		               <Fa 
			               icon="trash" color="red" 
			               onClick={() => props.deleteComment(comment.id)}
			             />
	                </CardHeader>

	               <CardBody>
		                <div className="added-text">
		                	{comment.comments}
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
