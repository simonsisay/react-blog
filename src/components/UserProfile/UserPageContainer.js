import React from 'react'
import {AuthContext} from '../../context/AuthProvider'
import UserPage from './UserPage'

const UserPageContainer = (props) => {
	return(
		<AuthContext.Consumer>
		{(context) => (
			<UserPage 
				user={context.user}
				otherId={props.location.state.id}
			/>
		)}
		</AuthContext.Consumer>
	)
}

export default UserPageContainer