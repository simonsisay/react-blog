import React from 'react'
import { Card, CardBody, CardHeader, Fa } from 'mdbreact'
import moment from 'moment'
import { Link } from 'react-router-dom'

const UserComments = (props) => {
	console.log(props )
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
	              <CardHeader className="p-2 label cardHeader comment-header white-text">
	                <img 
		                src={comment.image} 
		                className="rounded-circle z-depth-1-half"
		                alt='comment'
	               	/>
	                  <div className="comment-name">
	                  	<div className="user-comment-info">
			                  <Link to={{
			                  	pathname:`/user/${comment.name.replace(' ', '')}`,
			                  	state:{
			                  		id:comment.user_id
			                  	}
			                  }}
			                  	className="name white-text">
			                  	{comment.name}
			                  </Link> 
			                  <small className="date">{ moment(comment.createdAt).format('D MMMM YYYY') }</small>
			               </div>
		               {
		               props.user.id === comment.user_id 
		               ? 
			               props.deleteSpinner 
			               ? 
			               	<Fa icon="spinner" spin size="2x" className="white-text" />
			               :
			               <Fa 
				               icon="trash" className="red-text" style={{cursor:'pointer'}}
				               onClick={() => props.deleteComment(comment.id)}
				             />

				         :  ''
			            }
			            </div>
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
