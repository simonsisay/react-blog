import React, { Component } from 'react'
// import axios from 'axios'
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
		// const token = `Bearer ${localStorage.getItem("token")}`
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5OWE4NTRmLTE1YzUtNDc1Yi1hMWFhLWI3YTVjYzE4NThjZiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL3BsYXRmb3JtLWxvb2thc2lkZS5mYnNieC5jb20vcGxhdGZvcm0vcHJvZmlsZXBpYy8_YXNpZD0yNTEzMzY3NDIzOTEyNjImaGVpZ2h0PTUwJndpZHRoPTUwJmV4dD0xNTQxMjM4NDE5Jmhhc2g9QWVURFpzdmFsdnNLVk9CSCIsImVtYWlsIjoibnVsbCIsImlzc3VlZF9kYXRlIjoiMjAxOC0xMC0wNFQwOTo0NzowMC4yOTBaIiwiZXhwaXJlZF9kYXRlIjoiMjAxOC0xMC0xMVQwOTo0NzowMC4yOTBaIiwiaWF0IjoxNTM4NjQ2NDIwfQ.uBKBCRzQzhA9xbS0qSrutmwo8XlCd-Vh7dI1dj1T2c8"
		this.setState({
				user:jwt.decode(token), 
				isAuthenticated:token ? true : false, 
				token:token
		})
	}


	authenticateUser = () => {
		this.setState({isAuthenticated:true})
		
	}

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
