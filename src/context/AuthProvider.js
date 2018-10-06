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

		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3OTllNjhhLWUzYmEtNDNlYy1iMmU1LTAxZWRjNGQ4MjViMyIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTEwLTA2VDE3OjI5OjExLjgzMFoiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTEwLTEzVDE3OjI5OjExLjgzMFoiLCJpYXQiOjE1Mzg4NDY5NTF9.Xfg4Vj1uvK_5T4L4QeNxceyrdmS4RXEQCqxS8_DAg_w"
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
		console.log(this.state.user)
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
