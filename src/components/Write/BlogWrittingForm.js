import React, { Component } from 'react'
import './blogForm.css'
import { FormGroup, Label, Input} from 'reactstrap';
import CategoryRadio from './CategoryRadio'
import { Button, Fa } from 'mdbreact'
import axios from 'axios'
import ApiKey from '../../config/index'

import BlogImageForm from './blogImageForm'

class BlogWrittingForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: this.props.title || '',
			blog: this.props.blog || '',
			imageUrl: this.props.imageUrl || '',
			category: this.props.category || '',
			fromEdit:false,
			imagesFromUnsplash:[],
			imageSearch:'',
			isSpinnerOpen:false,
			imageSpinner:false
		}
	}

	componentDidMount(){
		if(this.props.fromEdit){
			this.setState({fromEdit:true})
		}
		else {
			this.setState({fromEdit:false})
		}
	}



	editBlog = () => {
		this.setState({isSpinnerOpen:true})
		axios({
			method:'put',
			url:`https://ethblogi1.herokuapp.com/api/blog/Update/${this.props.id}`,
			headers:{
				authorization:this.props.token
			},
			data:{
				title:this.state.title,
				category:this.state.category,
				content:this.state.blog,
				image:this.state.imageUrl
			}
		})
		.then(response => {
			console.log(response)
			this.setState({blog:'', imageUrl:'', category:'', title:'', isSpinnerOpen:false})
			this.props.redirect({
			     pathname: `/user/${this.props.user.replace(' ', '')}`,
			     state: {
			     	id: this.props.userId
			     }  
			 })
			})
			.catch(error => {
				console.log(error)
			})
	}



	postNewBlog = (e) => {
		e.preventDefault();
		this.setState({isSpinnerOpen:true})
		axios({
			method:'post',
			url:'https://ethblogi1.herokuapp.com/api/blog/New',
			headers:{
				authorization:this.props.token
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
			 this.props.redirect({
			     pathname: `/user/${this.props.user.replace(' ', '')}`,
			     state: {
			     	id: this.props.userId
			     }  
			 })
			// this.props.redirect.push(`/user/${this.props.user}`);
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
		        			type="button" 
		        			color="indigo" 
		        			onClick={this.state.fromEdit ? this.editBlog : this.postNewBlog}
		        			className="post-button"
		        		>
		        			{this.state.fromEdit ? 'Update' : 'Post'}
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