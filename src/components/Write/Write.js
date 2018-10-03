import React from 'react'
import BlogWrittingForm from './BlogWrittingForm'
import { AuthContext } from '../../context/AuthProvider'

const Write = (props) => {
	return(
		<div className="content">
			<AuthContext.Consumer>	
			{(context) => (
				<BlogWrittingForm 
					redirect={props.history}
					user={context.user.full_name}
				/>
			 )
			}
			</AuthContext.Consumer>
		</div>
	)
}

export default Write