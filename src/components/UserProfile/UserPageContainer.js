import React, { Component } from 'react'
import {AuthContext} from '../../context/AuthProvider'
import UserPage from './UserPage'

class UserPageContainer extends Component {
	render(){
		console.log(this.props.location.state.id)
		return(
			<AuthContext.Consumer>
			{(context) => (
				<UserPage 
					user={context.user}
					otherId={this.props.location.state.id}
				/>
			)}
			</AuthContext.Consumer>
		)
	}
}

export default UserPageContainer