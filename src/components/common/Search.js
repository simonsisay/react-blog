import React from 'react'


const Search = (props) => {
	return(
		<form className="form-inline mt-4 mb-4">
		  <i className="fa fa-search" aria-hidden="true"></i>
		  <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
		</form>
	)
}

export default Search