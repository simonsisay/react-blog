import React from 'react'
import { AuthContext } from '../../context/AuthProvider'
import CategoryPage from './CategoryPage'

const CategoryPageContainer = (props) => {
	return(
		<AuthContext.Consumer>
		{(context) => (
			<CategoryPage 
				token={context.token}
				category={props.match.params.category}
				user={context.user}
			/>
		)
		}
		</AuthContext.Consumer>
	)
}

export default CategoryPageContainer