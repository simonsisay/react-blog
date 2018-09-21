import React, { Component } from 'react'
import './blogForm.css'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CategoryRadio from './CategoryRadio'
import { Button } from 'mdbreact'
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
			imageSearch:''
		}
	}

	// postNewBlog = () => {
	// 	axios({
	// 		method:'post',
	// 		url:'',
	// 		header:{
	// 			a:token
	// 		},
	// 		data:{
	// 			title:this.state.title,
	// 			content:this.state.content
	// 		}
	// 	})
	// }

	handleInputChange = (event) => {
		console.log(event.target.value)
		this.setState({[event.target.name]: event.target.value})
	}


	handleRadioChange = (event) => {
		this.setState({category:event.target.value})
	}


	getImageFormUnsplash = (query) => {
		axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${ApiKey}`)
		.then(response => {
			const sliced = response.data.results.slice(0,8)
			this.setState({imagesFromUnsplash:sliced})
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
		        		<Button type="submit" color="indigo" className="post-button">Post</Button>
		        </div>
		      </form>
			</div>
		)
	}
}

export default BlogWrittingForm