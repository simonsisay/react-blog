import React from 'react'
import { AuthContext } from '../context/AuthProvider'
import SignIn from './SignIn'

const SignInContainer = (props) => {
	return(
		<AuthContext.Consumer>
		{(context) => (
				<SignIn 
					signIn={context.authenticateUser}
					location={props.location.search}
					redirect={props.history.push}
				/>
		 )
		}
		</AuthContext.Consumer>
	)
}

export default SignInContainer