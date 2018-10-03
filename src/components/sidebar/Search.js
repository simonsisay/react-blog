import React from 'react'


const Search = (props) => {
	return(
		<form className="form-inline mt-4 mb-4" onSubmit={props.getSearchResult}>
		  <i className="fa fa-search" aria-hidden="true"></i>
		  <input 
		  		className="form-control form-control-sm ml-3 w-75" 
		  		type="text" 
		  		placeholder="Search" 
		  		aria-label="Search" 
		  		name="search"
		  		value={props.value}
		  		onChange={props.handleInputChange}
		  	/>
		</form>
	)
}

export default Search