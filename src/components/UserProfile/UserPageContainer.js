import React, { Component } from 'react'
import {AuthContext} from '../../context/AuthProvider'
import UserPage from './UserPage'

class UserPageContainer extends Component {

	componentWillReceiveProps(nextProps){
		if(this.props.match.params.name !== nextProps.match.params.name){
			window.location.reload();
		}
	}


	render(){
		console.log(this.props)
		return(
			<AuthContext.Consumer>
			{(context) => (
				<UserPage 
					user={context.user}
					otherId={this.props.match.params.name} 
					isAuth={context.isAuthenticated}
					token={context.token}
				/>
			)}
			</AuthContext.Consumer>
		)
	}
}

export default UserPageContainer