import React from 'react'
import Sidebar from './sidebar'
import { AuthContext } from '../../context/AuthProvider'

const SideBarContainer = () => {
	return(
		<AuthContext.Consumer>
		{(context) => (
			<Sidebar signInFb={context.signInFb}/>
		)
		}
		</AuthContext.Consumer>
	)
}

export default SideBarContainer