import React from 'react'
import { Card } from 'mdbreact'


const BookmarkedCard = () => {
	return(
		<div className="">
			<h5 className="h5-responsive font-weight-bold">Bookmarked articles</h5>
			<Card className="bookmarked-card">
				<p className="bookmarked-title">bookmarked goes here</p>
				<p className="bookmarked-title">bookmarked goes here</p>
				<p className="bookmarked-title">bookmarked goes here</p>
				<p className="bookmarked-title">bookmarked goes here</p>
				<p className="bookmarked-title">bookmarked goes here</p>
				<p className="bookmarked-title">bookmarked goes here</p>
			</Card>
		</div>
	)
}

export default BookmarkedCard