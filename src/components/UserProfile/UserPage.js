import React, { Component } from 'react'
import UserInfo from './UserInfo'
import ArticlesByUser from './ArticlesByUser'
import axios from 'axios'
// import { Fa } from 'mdbreact'

class UserPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			ownAccount:true,
			userInfo:{},
			articlesByUser:[],
			isSpinning:false,
			errorMessage:'',
			userId:''

		}
	}

	componentWillMount(){
		this.setState({isSpinning:true})

		let userId;
		if(this.props.isAuth && this.props.user.id === this.props.otherId){
			this.setState({
				ownAccount:true, 
			})
			userId = this.props.user.id
			this.setState({userId});
		}
		else if(!this.props.isAuth || this.props.user.id !== this.props.otherId){
				this.setState({
					ownAccount:false, 
				})
			userId = this.props.otherId
			this.setState({userId})
		}
		
		axios.get(`https://ethblogi1.herokuapp.com/api/blog/User/${userId}`)
			.then(response => {
				this.setState({
					userInfo:this.props.user,
					articlesByUser:response.data[1].blogs,
					userName:response.data[1].full_name,
					userImage:response.data[1].image,
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
							token={this.props.token}
							userId={this.state.userId}
							userName={this.state.userName}
							userImage={this.state.userImage}
						/>
					{
					 this.state.errorMessage 
					 ? <h3 className="error-message">{this.state.errorMessage}</h3>
					 :
						<ArticlesByUser 
							articleList={this.state.articlesByUser}
							fullName={this.state.userName}
							errorMessage={this.state.errorMessage}
							userId={this.state.userId}
						/>
					}
				</div>
			)
	}
}
export default UserPage
