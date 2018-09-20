import React from 'react'
import UserInfo from './UserInfo'
import ArticlesByUser from './ArticlesByUser'

const UserPage = () => {
	return(
		<div className="content user-content">
				<UserInfo />
				<ArticlesByUser />
		</div>
	)
}
export default UserPage