import React from 'react'
import { Link } from 'react-router-dom'
import { Fa } from 'mdbreact'


const NotFound = () => {
	return(
		<div className="h-100 content d-flex justify-content-center align-items-center black-text">
			<Link to="/" >Page not found Go Home <Fa icon="home" size="3x" /></Link>
		</div>
	)
}

export default NotFound