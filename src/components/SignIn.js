import React, { Component } from 'react'
import queryString from 'query-string'
import { Fa } from 'mdbreact'

class SignIn extends Component{

	componentDidMount(){
		console.log(this.props)
		let data = queryString.parse(this.props.location)
		if(!data.authorization){
			this.props.redirect('/')
			return
		}

		localStorage.setItem("token", data.authorization)
		this.props.signIn();
		console.log(data.authorization)
		//console.log(localStorage.setItem('token', data.authorization)
	}


	render(){
		return (
			<div style={{margin:'400px', color:'black'}}>
				<Fa icon="spinner" spin size="3x" />
			</div>
		)
	}
}

export default SignIn