import React from 'react'
import { Link } from 'react-router-dom'
import { Fa } from 'mdbreact'

const SearchList = (props) => {
	return(
		<div>
		{
			props.searchSpinner 
			? 
				<Fa icon="Spinner" spin className="spiner-icon" size="1x" />
			:
			props.searchResult.map(item => (
				<div key={item.user_id}>
					<hr color="white"/>
					<Link to={`/blog/${item.blog_id}`} >
						<p className="text-center white-text"> {item.title} </p>
					</Link>
					<hr color="white"/>
				</div>
			))
		}
		</div>
	)
}

export default SearchList