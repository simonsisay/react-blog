import React, { Component } from 'react'
import UserInfo from './UserInfo'
import ArticlesByUser from './ArticlesByUser'

class UserPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			ownAccount:false,
		}
	}

	componentDidMount(){
	   console.log(this.props.location)
		// if(this.props.location.state.ownAccount){
		// 	this.setState({ownAccount:true})
		// }
		// console.log(this.state.sownAccount)
	}

	render(){
		return(
			<div className="content user-content">
					<UserInfo />
					{/*<ArticlesByUser />*/}
			</div>
		)
	}
}
export default UserPage