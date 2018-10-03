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

	componentDidMount(){
		const token = localStorage.getItem("token")
		this.setState({
				user:jwt.decode(token), 
				isAuthenticated:token ? true : false, 
				token:token
		})
	}


	authenticateUser = () => {
		console.log('trying')
		this.setState({isAuthenticated:true})
		
	}

	signOutUser = () => {
		localStorage.removeItem('token')
		window.location.reload();
	}


	render(){
		return(
			<AuthContext.Provider value={{
				isAuthenticated:this.state.isAuthenticated,
				signInUser:this.signInUser,
				user:this.state.user,
				authenticateUser:this.authenticateUser,
				signOut:this.signOut,
				token:this.state.token
			}}>
				{this.props.children}
			</AuthContext.Provider>
		)
	}
}
