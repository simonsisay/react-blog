import React from 'react'
import './blogForm.css'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CategoryRadio from './CategoryRadio'
import { Button } from 'mdbreact'

const BlogWrittingForm = () => {
	return(
		<div className="blog-form-container">
			<h1 className="h1-responsive font-weight-bold">
				Write your new blog post
			</h1>

			<form>
				<FormGroup>
		          <Label for="title">Ttile</Label>
		          <Input type="text" name="title"  />
	       	 </FormGroup>

	       	 <FormGroup>
					<Label for="blog-image">Blog Image</Label>
					<Input type="url" name="imageUrl" placeholder="paste image url"/>
				</FormGroup>

				<FormGroup className="textarea-form">
		          <Label for="exampleText">Write your blog here</Label>
		          <Input className="textarea-form" type="textarea" name="text" id="exampleText" rows="15"required/>
	        </FormGroup>

	        <div>
	        	<CategoryRadio />
	        </div>

	        <div className="post-button">
	        		<Button type="submit" color="indigo" className="post-button">Post</Button>
	        </div>
	      </form>
		</div>
	)
}

export default BlogWrittingForm