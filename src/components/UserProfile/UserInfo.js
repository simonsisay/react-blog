import React, { Component } from 'react';
import {Card, Badge} from 'mdbreact';
import './user.css'


const UserInfo = () =>  {
  return(
  		<div className="user-info">
  			<div className="follow">
  				<h1>Simon Sisay</h1>
  				<div className="badges">
	  				<Badge className="badge" color="blue-grey">Followers 2</Badge>
	  				<Badge className="badge" color="blue-grey">Following 19</Badge>
	  			</div>
  			</div>
	        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" 
	        		className="rounded user-avatar img-fluid" 
	        		 alt="Sample avatar"
	        	/>
	   </div>
	)
}

export default UserInfo