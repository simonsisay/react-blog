import React from 'react'
import { Link } from 'react-router-dom'
import { Fa } from 'mdbreact'

const SearchList = (props) => {
	return(
		<div>
		{
			props.searchSpinner 
			? 
				<Fa icon="spinner" spin className="search-spiner-icon text-center white-text" size="2x" />
			:
				props.searchResult.length === 0 

				? 
					<p className="text-center">No result found</p> 
				:
					props.searchResult.map(item => (
						<div key={item.id}>
							<hr color="white"/>
							<a href={`/blog/${item.id}`} >
								<p className="text-center white-text"> {item.title} </p>
							</a>
							<hr color="white"/>
						</div>
					))
		}
		</div>
	)
}

export default SearchList