import React, { Component } from 'react';
import {Fa, Card, Badge} from 'mdbreact';
import './user.css'
import { Link } from 'react-router-dom'

const UserInfo = () =>  {
  return(
	  		<div className="user-info">
	  			<div className="follow">
	  				<h2>Simon Sisay</h2>

	  				<div className="badges">
	  					<div>
			  				<Badge className="badge" color="blue-grey">Followers 2</Badge>
			  				<Badge className="badge" color="blue-grey">Following 19</Badge>
			  			</div>
		  				<div>	
		  					<button className="btn btn-outline-blue btn-sm" color="blue-grey">Follow</button>
		  				</div>
		  			</div>

	  			</div>

	  			 <div className="avatar-and-button">
			        <img 
			        		src="https://www.ebunch.ca/wp-content/uploads/avatar-1.png" 
			        		className="rounded user-avatar img-fluid" 
			        		alt="Sample avatar"
			        	/>
			        <Link to="/write">
				  			<button className="btn btn-sm btn-outline-green">
				  				New post <Fa icon="pencil" color="gray" />
				  			</button>
		  				</Link>
	  			  </div>
		   </div>
	)
}

export default UserInfo