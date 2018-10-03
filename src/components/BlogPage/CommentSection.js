import React, { Component } from 'react'
import { FormGroup, Input } from 'reactstrap'
import { Card, CardHeader } from 'mdbreact'
import { Link } from 'react-router-dom'
import UserComments from './UserComments'
import axios from 'axios'


class CommentSection extends Component{
	constructor(props){
		super(props)
		this.state = {
			newComment:'',
			allComments:[]
		}
	}

	componentDidMount(){
		axios({
			method:'get',
			url:`https://ethblogi1.herokuapp.com/api/feedback/all/${this.props.blogId}`,
			headers:{
					token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTEwLTAyVDA5OjE1OjA3LjYzN1oiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTEwLTAyVDE1OjE1OjA3LjYzN1oiLCJpYXQiOjE1Mzg0NzE3MDd9.lP2UpZQjrTXsyhSs-8QXito2AlSKGZDC5NQPhVs3VVQ',
			}
		})
		.then(response => {
			console.log(response)
			this.setState({allComments:response.data[1].rows})
		})
	}


	handleInputChange = (e) => {
		this.setState({newComment:e.target.value})
	}

	addNewComment = () => {
		axios({
			method:'post',
			url:'https://ethblogi1.herokuapp.com/api/feedback/New',
			headers:{
				token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTEwLTAxVDIyOjIzOjIzLjQ3MFoiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTEwLTAyVDA0OjIzOjIzLjQ3MFoiLCJpYXQiOjE1Mzg0MzI2MDN9.pegHk9nyy6k9a6la615Ng2_IYKOCjUFZArst1we2hu4'
			},
			data:{
				blog_id:this.props.blogId,
				comments:this.state.newComment,
				user_id:this.props.userId
			}
		}).then(response => {
			console.log(response)
			this.setState({newComment:''})
		})
	}



	render(){
			return(
			<div>
			{
				this.props.openComment
				?
					<Card className="comment-form">
						<CardHeader>
							<div className="label">
									<img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="comment-avatar" />
									<a className="name">Simon Sisay</a>
							</div>
						</CardHeader>
			          <Input 
			       			className="textarea-form" 
			       			type="textarea" 
			       			name="blog" 
			       			value={this.state.newComment}
			       			onChange={this.handleInputChange}
			       			rows="4"
			       			cols="4"
			       			placeholder="write comment..."
			          		required
			          	/>
			          	<button 
			          		onClick={this.addNewComment}
			          		className="btn btn-sm btn-green">
			          		Comment
			          	</button>
					</Card>
				: 
					''
			 }
				<UserComments />
			</div>

		)
	}
}

export default CommentSection