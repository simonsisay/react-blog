import React, { Component } from 'react';
import {Fa, Card, Badge} from 'mdbreact';
import './user.css'
import { Link } from 'react-router-dom'
import axios from 'axios'



class UserInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			followers:0,
			following:0,
			isFollowing:false
		}
	}


	componentWillMount(){
		// axios.get({
		// 	method:'get',
		// 	url:`https://ethblogi1.herokuapp.com/api/User/Follower`,
		// 	data:{
		// 		followed_id:this.props.user.id
		// 	}
		// }).then(response => {
		// 	console.log(response)
		// }).catch(error => {
		// 	console.log(error)
		// })

		// axios.get({
		// 	method:'get',
		// 	url:`https://ethblogi1.herokuapp.com/api/Following/User`,
		// }).then(response => {
		// 	console.log(response)
		// }).catch(error => {
		// 	console.log(error)
		// })

			axios({
				method:'post',
				url:'https://ethblogi1.herokuapp.com/api/Check/User',
				headers:{
					token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTEwLTAxVDA3OjQ0OjUxLjgzM1oiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTEwLTAxVDEzOjQ0OjUxLjgzM1oiLCJpYXQiOjE1MzgzNzk4OTF9.zyIWsw7BGLimvkm56-zrR-giAFIkXJ8SdfAkvnH9fQk',
				},
				data:{
					followed_id:this.props.user.id
				}

			}).then(response => {
				console.log(response)
				this.setState({
					isFollowing:response.data.following == 0 ? false : true
				})
			})


	}


	followOrUnFollowUser = () => {

		if(!this.state.isFollowing){
			this.setState({isFollowing:true})
			axios({
				method:'post',
				url:'https://ethblogi1.herokuapp.com/api/Follow/User',
				headers:{
					token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTEwLTAxVDA3OjQ0OjUxLjgzM1oiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTEwLTAxVDEzOjQ0OjUxLjgzM1oiLCJpYXQiOjE1MzgzNzk4OTF9.zyIWsw7BGLimvkm56-zrR-giAFIkXJ8SdfAkvnH9fQk',
				},
				data:{
					followed_id:this.props.user.id
				}

			}).then(response => {
				console.log(response)
			})
		}

		else {
			this.setState({isFollowing:false})
			axios({
				method:'post',
				url:'https://ethblogi1.herokuapp.com/api/Unfollow/User',
				headers:{
					token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTEwLTAxVDA3OjQ0OjUxLjgzM1oiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTEwLTAxVDEzOjQ0OjUxLjgzM1oiLCJpYXQiOjE1MzgzNzk4OTF9.zyIWsw7BGLimvkm56-zrR-giAFIkXJ8SdfAkvnH9fQk',
				},
				data:{
					followed_id:this.props.user.id
				}

			}).then(response => {
				console.log(response)
			})
		}
  }

	render(){
	  return(
		  		<div className="user-info">
		  			<div className="follow">
		  				<h2>{this.props.user.full_name}</h2>

		  				<div className="badges">
		  					<div>
				  				<Badge className="badge" color="blue-grey">Followers 2</Badge>
				  				<Badge className="badge" color="blue-grey">Following 19</Badge>
				  			</div>
				  			{this.props.ownAccount 
				  			? 
				  				''
				  			:
				  				<div>	
				  					<button 
				  						className="btn btn-outline-blue btn-sm" 
				  						color="blue-grey"
				  						onClick={this.followOrUnFollowUser}
				  					>
				  					{this.state.isFollowing 
				  					? 
				  						'UnFollow' 
				  					:
				  						'Follow'
				  					}
				  				</button>
				  				</div>
			  				}
			  			</div>

		  			</div>

		  			 <div className="avatar-and-button">
				        <img 
				        		src={this.props.user.image} 
				        		className="rounded user-avatar img-fluid" 
				        		alt={this.props.user.full_name}
				        	/>
				        {
				        	this.props.ownAccount
				         ? 
				         	 <Link to="/write">
						  			<button className="btn btn-sm btn-outline-green">
						  				New post <Fa icon="pencil" color="gray" />
						  			</button>
				  				</Link>
				         :
				         	''
			  				}
		  			  </div>
			   </div>
			)
	 	}
}

export default UserInfo