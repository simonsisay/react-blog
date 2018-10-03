import React from 'react'
import ArticleList from '../common/articleList'
import { Fa } from 'mdbreact'

const ArticlesByUser = (props) => {
	return(
		<div className="articles-by-user">
			{
			 props.articleList.length === 0 
			? 
				<Fa icon="spinner" spin size="2x" className="spinner-icon"/> 
			: 
				props.errorMessage 
				? 	
					<h2>{props.errorMessage}</h2>
				:
					<div>
						<p>Articles</p>
						<hr />
						<ArticleList 
							blogs={props.articleList}
						/>
					</div>
			}
		</div>
	)
}

export default ArticlesByUser