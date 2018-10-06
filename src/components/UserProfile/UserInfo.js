import React, { Component } from 'react';
import {Fa, Badge} from 'mdbreact';
import './user.css'
import { Link } from 'react-router-dom'
import axios from 'axios'



class UserInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			followers:'',
			following:'',
			isFollowing:false
		}
	}


	componentDidMount(){
		axios({
			method:'post',
			url:`https://ethblogi1.herokuapp.com/api/User/Followers`,
			headers:{
				authorization:this.props.token
			},
			data:{
				followed_id:this.props.userId
			},
		})
		.then(response => {
			this.setState({followers:`${response.data.followers}`})
		}).catch(error => {
			console.log('followers', error)
		})


		axios({
			method:'get',
			url:'https://ethblogi1.herokuapp.com/api/Following/User',
			headers:{
				authorization:this.props.token
			},
		})
		.then(response => {
			this.setState({following:`${response.data.following}`})
		})
		.catch(error => {
			console.log("following", error)
		})


		if(!this.props.ownAccount){
			axios({
				method:'post',
				url:'https://ethblogi1.herokuapp.com/api/Check/User',
				headers:{
					authorization:this.props.token
				},
				data:{
					followed_id:this.props.userId
				}

			})
			.then(response => {
				this.setState({
					isFollowing:response.data.following === 0 ? false : true,
				})
			})
		}
	}


	followOrUnFollowUser = () => {

		if(!this.state.isFollowing){
			this.setState({isFollowing:true, followers:toString(Number(this.state.followers) + 1) })
			axios({
				method:'post',
				url:'https://ethblogi1.herokuapp.com/api/Follow/User',
				headers:{
					authorization:this.props.token
				},
				data:{
					followed_id:this.props.userId
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
					authorization:this.props.token
				},
				data:{
					followed_id:this.props.userId
				}

			}).then(response => {
				this.setState({followers:this.state.followers - 1})
			})
		}
  }

	render(){
	  return(
		  		<div className="user-info">
		  			<div className="follow">
		  				<div className="user-name-email">
			  				<h2>{this.props.userName}</h2>
			  			</div>
			  			{
			  			this.props.isAuth 
			  			?
			  				<div className="badges">
		  					<div>
				  				<Badge color="blue-grey">Followers {this.state.followers}</Badge>
				  				{this.props.ownAccount ? <Badge color="blue-grey">Following {this.state.following}</Badge> : ''}
				  			</div>

				  			{this.props.ownAccount 
				  			? 
				  				''
				  			:
				  				<div>	
				  					<Badge 
				  						style={{cursor:'pointer'}}
				  						className="badge" 
				  						color="green"
				  						onClick={this.followOrUnFollowUser}
				  					>
				  					{this.state.isFollowing 
				  					? 
				  						'Following' 
				  					:
				  						'Follow'
				  					}
				  				</Badge>
				  				</div>
			  				}
			  			</div>

			  			
			  			: ''
			  			}


		  			</div>

		  			 <div className="avatar-and-button">
				        <img 
				        		src={this.props.userImage} 
				        		className="rounded user-avatar img-fluid" 
				        		alt={this.props.userImage}
				        	/>
				        {
				        	this.props.ownAccount
				         ? 
				         	 <Link to={{
		                      pathname:'/write',
		                      state:{
		                        title:'',
		                        imageUrl:'',
		                        category:'',
		                        blog:'',
		                        id:'',
		                        fromEdit:false
		                      }
		                    }}>
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