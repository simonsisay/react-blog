import React from 'react'
import BlogWrittingForm from './BlogWrittingForm'
import { AuthContext } from '../../context/AuthProvider'

const Write = (props) => {
	console.log(props)
	return(
		<div className="content">
			<AuthContext.Consumer>	
			{(context) => (
				<BlogWrittingForm 
					redirect={props.history.push}
					user={context.user.full_name}
					token={context.token}
					userId={context.user.id}
					title={props.location.state.title}
					imageUrl={props.location.state.imageUrl}
					blog={props.location.state.blog}
					category={props.location.state.category}
					fromEdit={props.location.state.fromEdit}
					id={props.location.state.id}
				/>
			 )
			}
			</AuthContext.Consumer>
		</div>
	)
}

export default Write