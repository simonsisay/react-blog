import React, { Component } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'

export const AuthContext = React.createContext();




export class AuthProvider extends Component{
	constructor(props){
		super(props);
		this.state = {
			isAuthenticated:false,
			user:{}
		}
	}

	componentWillMount(){
		const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNlYm9va19pZCI6IjI1MTMzNjc0MjM5MTI2MiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL3BsYXRmb3JtLWxvb2thc2lkZS5mYnNieC5jb20vcGxhdGZvcm0vcHJvZmlsZXBpYy8_YXNpZD0yNTEzMzY3NDIzOTEyNjImaGVpZ2h0PTUwJndpZHRoPTUwJmV4dD0xNTQwODEzMjM1Jmhhc2g9QWVUR1hKUGI3d2lnUFlLbCIsImVtYWlsIjoibnVsbCIsImlhdCI6MTUzODIyMTIzNn0.GBvaHyw7RolbhEI25Gz1pmHOvGgzn69BQ5d_ySKmekg'
		// const token = ''
		this.setState({user:jwt.decode(token), isAuthenticated:token ? true : false})
		console.log(this.state.isAuthenticated)
	}


	signInUser = () => {
		console.log('try to authenticate')
	}

	signOutUser = () => {

	}

	render(){
		return(
			<AuthContext.Provider value={{
				isAuthenticated:this.state.isAuthenticated,
				signInUser:this.signInUser,
				user:this.state.user
			}}>
				{this.props.children}
			</AuthContext.Provider>
		)
	}
}
