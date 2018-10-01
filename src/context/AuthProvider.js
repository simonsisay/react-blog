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
		const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTA5LTMwVDA5OjIwOjUwLjkyNloiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTA5LTMwVDE1OjIwOjUwLjkyNloiLCJpYXQiOjE1MzgyOTkyNTB9.Nd8_l47EInei9Byw3_FYwcJpOn2m_qgtJaxKpjRhL58'
		// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNlYm9va19pZCI6IjI1MTMzNjc0MjM5MTI2MiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL3BsYXRmb3JtLWxvb2thc2lkZS5mYnNieC5jb20vcGxhdGZvcm0vcHJvZmlsZXBpYy8_YXNpZD0yNTEzMzY3NDIzOTEyNjImaGVpZ2h0PTUwJndpZHRoPTUwJmV4dD0xNTQwODEzMjM1Jmhhc2g9QWVUR1hKUGI3d2lnUFlLbCIsImVtYWlsIjoibnVsbCIsImlhdCI6MTUzODIyMTIzNn0.GBvaHyw7RolbhEI25Gz1pmHOvGgzn69BQ5d_ySKmekg'
		// const token = ''
		// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4NzljMWQ3LWM0NWUtNDg2YS05NDA1LWQ3MzI5MTQxYTRkMSIsImdvb2dsZV9pZCI6IjEwNzg5NDEzOTgyNDIxMzM4MTQ1MyIsImZ1bGxfbmFtZSI6Ik1pa2lhcyBBYmViZSIsImltYWdlIjoiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1oR0xHUzZuX3o2cy9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQU4zMURWM1QwSjVObzUzNE90M3hkVEJuSlQyREJMRW13L21vL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoibWlraWFzdGlsYWh1bkBnbWFpbC5jb20iLCJpc3N1ZWRfZGF0ZSI6IjIwMTgtMTAtMDFUMDg6NTA6MjkuNjIyWiIsImV4cGlyZWRfZGF0ZSI6IjIwMTgtMTAtMDFUMTQ6NTA6MjkuNjIyWiIsImlhdCI6MTUzODM4MzgyOX0.JWocACHPY0ZIXYZf3L1wNUqeXmWBhNYxB453aozULFo'
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
