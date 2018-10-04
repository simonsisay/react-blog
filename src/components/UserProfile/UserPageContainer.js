import React, { Component } from 'react'
import {AuthContext} from '../../context/AuthProvider'
import UserPage from './UserPage'

class UserPageContainer extends Component {

	componentWillReceiveProps(nextProps){
		if(this.props.location.pathname !== nextProps.location.pathname){
			window.location.reload();
		}
	}


	render(){
		return(
			<AuthContext.Consumer>
			{(context) => (
				<UserPage 
					user={context.user}
					otherId={this.props.location.state.id} 
					isAuth={context.isAuthenticated}
					token={context.token}
				/>
			)}
			</AuthContext.Consumer>
		)
	}
}

export default UserPageContainer