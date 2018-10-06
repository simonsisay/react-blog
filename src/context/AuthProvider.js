import React, { Component } from 'react'
import jwt from 'jsonwebtoken'

export const AuthContext = React.createContext();


export class AuthProvider extends Component{
	constructor(props){
		super(props);
		this.state = {
			isAuthenticated:false,
			user:{},
			token:''
		}
	}

	componentWillMount(){
		// const token = localStorage.getItem("token");
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyN2EwYjE0LWMyZGUtNDc3Yi05OWJiLTdhMmNmNGU1MGM1NSIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL3BsYXRmb3JtLWxvb2thc2lkZS5mYnNieC5jb20vcGxhdGZvcm0vcHJvZmlsZXBpYy8_YXNpZD0yNTEzMzY3NDIzOTEyNjImaGVpZ2h0PTUwJndpZHRoPTUwJmV4dD0xNTQxNDA0MDgxJmhhc2g9QWVSN1ZBcWx1RkRnR3AwbiIsImVtYWlsIjoibnVsbCIsImlzc3VlZF9kYXRlIjoiMjAxOC0xMC0wNlQwNzo0ODowMS45ODRaIiwiZXhwaXJlZF9kYXRlIjoiMjAxOC0xMC0xM1QwNzo0ODowMS45ODRaIiwiaWF0IjoxNTM4ODEyMDgxfQ.201dg89g79l5aMhJPPBIuS3h2JjLrUClX2AI_whOngE"
		// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZWRfZGF0ZSI6IjIwMTgtMTAtMDZUMDg6MDI6MDMuMzU4WiIsImV4cGlyZWRfZGF0ZSI6IjIwMTgtMTAtMTNUMDg6MDI6MDMuMzU5WiIsImlhdCI6MTUzODgxMjkyM30.t6hWPQSKy4yTlstShWqk8EWH6gj6SudK9VVX6xjn6N0"	
		this.setState({
				user:jwt.decode(token), 
				isAuthenticated:token ? true : false, 
				token:token
		})
		const user = jwt.decode(token);
		console.log(user);
	}


	// authenticateUser = () => {
	// 	this.setState({isAuthenticated:true})
		
	// }

	signOutUser = () => {
		localStorage.removeItem('token');
		this.setState({token:''})
		window.location.reload();
	}


	render(){
		return(
			<AuthContext.Provider value={{
				isAuthenticated:this.state.isAuthenticated,
				signInUser:this.signInUser,
				user:this.state.user,
				authenticateUser:this.authenticateUser,
				signOut:this.signOutUser,
				token:this.state.token
			}}>
				{this.props.children}
			</AuthContext.Provider>
		)
	}
}
