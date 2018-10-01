import React, { Component } from 'react'
import UserInfo from './UserInfo'
import ArticlesByUser from './ArticlesByUser'
import axios from 'axios'
import { Fa } from 'mdbreact'

class UserPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			ownAccount:true,
			userInfo:{},
			articlesByUser:[],
			isSpinning:false,
			errorMessage:''

		}
	}

	componentWillMount(){
		this.setState({isSpinning:true})

		let userId

		if(this.props.user.id === this.props.otherId){
			this.setState({
				ownAccount:true, 
			})
			userId = this.props.user.id
		}
		else {
			this.setState({
				ownAccount:false, 
			})
			userId = this.props.user.id
		}

		axios.get(`https://ethblogi1.herokuapp.com/api/blog/User/${userId}`)
			.then(response => {
				console.log(response)
				this.setState({
					userInfo:this.props.user,
					articlesByUser:response.data[1].blogs,
					isSpinning:false
				})		
		})
		.catch(error => {
			console.log(error)
			this.setState({errorMessage:'Somthing went wrong. Please refresh the page !'})
		})
	}





	render(){
			return(
				<div className="content user-content">
						<UserInfo 
							ownAccount={this.state.ownAccount}
							user={this.state.userInfo}
							/>
						<ArticlesByUser 
							articleList={this.state.articlesByUser}
							fullName={this.state.userInfo.full_name}
							errorMessage={this.state.errorMessage}
						/>
				</div>
			)
	}
}
export default UserPage