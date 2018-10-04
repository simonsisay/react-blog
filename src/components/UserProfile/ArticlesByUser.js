import React from 'react'
import UserBlogList from './UserBlogList'
import { Fa } from 'mdbreact'

const ArticlesByUser = (props) => {
	return(
		<div className="articles-by-user">
			{
			 props.articleList.length === 0 
			? 
				<p>{props.fullName} has not written any articles yet</p>
			: 
				props.errorMessage 
				? 	
					<h2>{props.errorMessage}</h2>
				:
					<div>
						<p>Articles</p>
						<hr />
						<UserBlogList 
							blogs={props.articleList}
							userName={props.fullName}
							userId={props.userId}
						/>
					</div>
			}
		</div>
	)
}

export default ArticlesByUser