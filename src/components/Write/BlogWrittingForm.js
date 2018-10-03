import React, { Component } from 'react'
import './blogForm.css'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CategoryRadio from './CategoryRadio'
import { Button, Fa } from 'mdbreact'
import axios from 'axios'
import ApiKey from '../../config/index'
import ImageChoice from './imagesChoice'
import BlogImageForm from './blogImageForm'

class BlogWrittingForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			title:'',
			blog:'',
			imageUrl:'',
			category:'',
			imagesFromUnsplash:[],
			imageSearch:'',
			isSpinnerOpen:false,
			imageSpinner:false
		}
	}

	postNewBlog = (e) => {
		e.preventDefault();
		this.setState({isSpinnerOpen:true})
		axios({
			method:'post',
			url:'https://ethblogi1.herokuapp.com/api/blog/New',
			headers:{
					token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTEwLTAyVDA5OjE1OjA3LjYzN1oiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTEwLTAyVDE1OjE1OjA3LjYzN1oiLCJpYXQiOjE1Mzg0NzE3MDd9.lP2UpZQjrTXsyhSs-8QXito2AlSKGZDC5NQPhVs3VVQ',
			},
			data:{
				title:this.state.title,
				content:this.state.blog,
				category:this.state.category,
				image:this.state.imageUrl
			}
		})
		.then(response => {
			this.setState({blog:'', imageUrl:'', category:'', title:'', isSpinnerOpen:false})
			this.props.redirect.push(`/user/${this.props.user}`);
		})

	}



	handleInputChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}


	handleRadioChange = (event) => {
		this.setState({category:event.target.value})
	}


	getImageFormUnsplash = (query) => {
		this.setState({imageSpinner:true})
		axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${ApiKey}`)
		.then(response => {
			const sliced = response.data.results.slice(0,8)
			this.setState({imagesFromUnsplash:sliced, imageSpinner:false})
		})
		.catch(error => {
			console.log(error)
		})
	}



	imageRadioChange = (event) => {
		this.setState({imageUrl:event.target.value})
	}


	render(){
		return(
			<div className="blog-form-container">

			{
			this.state.isSpinnerOpen 
			? 
				<Fa className="spinner-icon" icon="spinner" spin size="3x"/>
			:
			<div>
				<h1 className="h1-responsive font-weight-bold">
					Write your new blog post
				</h1>

				<form>

					{/********************  Title Input *********/}
					<FormGroup>
			          <Label for="title">Ttile</Label>
			          <Input 
			          	type="text" 
			          	name="title" 
			          	value={this.state.title} 
			          	onChange={this.handleInputChange}
			          />
		       	 </FormGroup>

		       	{/********************  Image Url *********/}
		       	<BlogImageForm 
		       		imageUrl={this.state.imageUrl}
		        		getImageFormUnsplash={this.getImageFormUnsplash}
		        		imagesFromUnsplash={this.state.imagesFromUnsplash}
		        		imageSearch={this.state.imageSearch}
		        		handleInputChange={this.handleInputChange}
		        		imageRadioChange={this.imageRadioChange}
		        		imageRadioValue={this.state.imageUrl}
		        		isSpinnerOpen={this.state.imageSpinner}
		       	/>


		       {/********************  Text Area Form *********/}
					<FormGroup className="textarea-form">
			          <Label for="exampleText">Write your blog here</Label>
			          <Input 
		          			className="textarea-form" 
		          			type="textarea" 
		          			name="blog" 
		          			value={this.state.blog}
		          			onChange={this.handleInputChange}
		          			rows="15"
			          		required
			          	/>
		        </FormGroup>

		        <div>

		     {/********************  Category Radio *********/}
		        	<CategoryRadio
		        		handleInputChange={this.handleInputChange} 
		        		handleRadioChange={this.handleRadioChange}
		        		radioValue={this.state.category}
		        	/>
		        </div>

		     {/********************  Submit *********/}
		        <div className="post-button">
		        		<Button 
		        			type="submit" 
		        			color="indigo" 
		        			onClick={this.postNewBlog}
		        			className="post-button">
		        			Post
		        		</Button>
		        </div>
		      </form>
		   </div>
			}
			</div>
		)
	}
}

export default BlogWrittingForm