import React from 'react'
import { Link } from 'react-router-dom'


const SearchList = (props) => {
	return(
		<form onSubmit={props.search}>
			{props.searchResult.map(item => (
				<Link to={`/blog/${item.blog_id}`} key={item.user_id}>
					<p className="text-center white-text"> {item.title} </p>
				</Link>
			))}
		</form>
	)
}

export default SearchList