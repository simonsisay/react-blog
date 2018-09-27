import React, { Component } from 'react'
import UserInfo from './UserInfo'
import ArticlesByUser from './ArticlesByUser'

class UserPage extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
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