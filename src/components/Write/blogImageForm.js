import React, { Component } from 'react'
import ImageChoice from './imagesChoice'
import { FormGroup, Label, Input } from 'reactstrap'
import { Fa } from 'mdbreact'

class BlogImageForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			isSearchBoxOpen:false
		}
	}

	openSearchBox = () => {
		this.setState({isSearchBoxOpen:true})
	}

	closeSearchBox = () => {
		this.setState({isSearchBoxOpen:false})
	}

	render(){
		return(

			<div className="blog-image-form-container">

	       	 <FormGroup>
					<Label for="blog-image">Blog Image</Label>
					<Input 
						type="url" 
						className="imageUrl-form"
						name="imageUrl" 
						placeholder="paste image url" 
						value={this.props.imageUrl}
						onChange={this.props.handleInputChange}
						required
					/>

					<div>
						<p>or Get get images to choose based on your title</p>
						<button 
							type="button"
							className="btn btn-green" 
							onClick={this.openSearchBox}>
								get images
						</button>
						{
							this.state.isSearchBoxOpen ? 
								<div className="cancel">
									<Fa icon="close"  onClick={this.closeSearchBox}/>
									<Input type="text" 
										className="image-search-input"
										name="imageSearch" 
										value={this.props.imageSearch}  
										onChange={this.props.handleInputChange}
									/>
									<button 
										type="button"
										onClick={() => this.props.getImageFormUnsplash(this.props.imageSearch)}
										className="btn btn-green btn-sm"
										placeholder="enter keyword"
										value={this.props.imageSearch}
										onChange={this.handleInputChange}
									>
										Search
									</button>
								</div>

							: ''
						}
					</div>
				</FormGroup>

				<div>
					{this.props.imagesFromUnsplash.length !== 0 ? 
						<ImageChoice 
							imageRadioChange={this.props.imageRadioChange}
							imageRadioValue={this.props.imageUrl}
							images={this.props.imagesFromUnsplash}
						/>

					: 	''}	
				</div>

			</div>
		)
	}
}

export default BlogImageForm
 
