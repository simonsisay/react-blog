import React from 'react'
import BlogWrittingForm from './BlogWrittingForm'


const Write = (props) => {
	return(
		<div className="content">
			<BlogWrittingForm redirect={props.history}/>
		</div>
	)
}

export default Write