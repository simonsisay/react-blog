import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'mdbreact'

class UserComments extends Component{
	render(){
		return(
			<div className="user-comments-container">
				<h6 className="font-weight-bold mb-2">Comments</h6>
				<Card className="news">
	              <CardHeader className="label cardHeader">
	                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg" className="rounded-circle z-depth-1-half"/>
	                  <div className="comment-name">
		                  <a className="name">Lili Rose</a> 
		                  <span className="date">2 days ago</span>
		               </div>
	                </CardHeader>

	               <CardBody>
		                <div className="added-text">
		                	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero inventore, 
		                	iste quas libero eius? Vitae sint neque animi alias sunt dolor, accusantium 
		                	ducimus, non placeat voluptate.
		                </div>
		             </CardBody>
	            </Card>
			</div>
		)
	}
}

export default UserComments
