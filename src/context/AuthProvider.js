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
		this.setState({isAuthenticated:localStorage.getItem("token") ? true : false})
		const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNlYm9va19pZCI6IjI1MTMzNjc0MjM5MTI2MiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL3BsYXRmb3JtLWxvb2thc2lkZS5mYnNieC5jb20vcGxhdGZvcm0vcHJvZmlsZXBpYy8_YXNpZD0yNTEzMzY3NDIzOTEyNjImaGVpZ2h0PTUwJndpZHRoPTUwJmV4dD0xNTQwODEzMjM1Jmhhc2g9QWVUR1hKUGI3d2lnUFlLbCIsImVtYWlsIjoibnVsbCIsImlhdCI6MTUzODIyMTIzNn0.GBvaHyw7RolbhEI25Gz1pmHOvGgzn69BQ5d_ySKmekg'
		// const token = ''
		// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4NzljMWQ3LWM0NWUtNDg2YS05NDA1LWQ3MzI5MTQxYTRkMSIsImdvb2dsZV9pZCI6IjEwNzg5NDEzOTgyNDIxMzM4MTQ1MyIsImZ1bGxfbmFtZSI6Ik1pa2lhcyBBYmViZSIsImltYWdlIjoiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1oR0xHUzZuX3o2cy9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQU4zMURWM1QwSjVObzUzNE90M3hkVEJuSlQyREJMRW13L21vL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoibWlraWFzdGlsYWh1bkBnbWFpbC5jb20iLCJpc3N1ZWRfZGF0ZSI6IjIwMTgtMTAtMDFUMDg6NTA6MjkuNjIyWiIsImV4cGlyZWRfZGF0ZSI6IjIwMTgtMTAtMDFUMTQ6NTA6MjkuNjIyWiIsImlhdCI6MTUzODM4MzgyOX0.JWocACHPY0ZIXYZf3L1wNUqeXmWBhNYxB453aozULFo'
		this.setState({user:jwt.decode(token)})
		console.log(this.state.isAuthenticated)
	}


	authenticateUser = () => {
		console.log('trying')
		this.setState({isAuthenticated:true})
		
	}


	render(){
		 console.log(this.state.isAuthenticated)
		return(
			<AuthContext.Provider value={{
				isAuthenticated:this.state.isAuthenticated,
				signInUser:this.signInUser,
				user:this.state.user,
				authenticateUser:this.authenticateUser,
				signOut:this.signOut
			}}>
				{this.props.children}
			</AuthContext.Provider>
		)
	}
}
