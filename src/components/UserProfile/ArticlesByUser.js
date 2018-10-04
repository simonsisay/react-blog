import React from 'react'
import UserBlogList from './UserBlogList'
import { Fa } from 'mdbreact'
import { AuthContext } from '../../context/AuthProvider'



const ArticlesByUser = (props) => {
	return(
		<div className="articles-by-user">
			{
			 props.articleList.length === 0 
			? 
				<Fa className="spinner-icon" icon="spinner" spin size="3x" />
			: 
				props.errorMessage 
				? 	
					<h2>{props.errorMessage}</h2>
				:
					<div>
						<p>Articles</p>
						<hr />

						<AuthContext.Consumer>
						{(context) => (
							<UserBlogList 
								blogs={props.articleList}
								userName={props.fullName}
								userId={props.userId}
								ownAccount={props.ownAccount}
								token={context.token}
							/>
							)}
						</AuthContext.Consumer>
					</div>
			}
		</div>
	)
}

export default ArticlesByUser