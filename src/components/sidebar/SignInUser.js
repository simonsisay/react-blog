import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Fa } from 'mdbreact'


class SignInUser extends Component {

	signInFacebook = () => {
		window.location = "https://ethblogi1.herokuapp.com/user/facebook/login";
	}

	signInGoogle = () => {
		window.location= "https://ethblogi1.herokuapp.com/user/google/login"
	}


	render(){
	 	return(
			<div className="signin-buttons">
				<Fa icon="close" 
					onClick={this.props.openSignInOption} 
					style={{cursor:'pointer'}}
				/>
				<Button type="button" color="red" onClick={this.signInGoogle}>Sign in with google</Button>
				<Button type="button" color="blue" onClick={this.signInFacebook}>Sign in with facebook</Button>

			</div>
		)
	}
}

export default SignInUser