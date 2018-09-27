import React, { Component } from 'react'
import axios from 'axios'


export const AuthContext = React.createContext();


export class AuthProvider extends Component{
	constructor(props){
		super(props);
		this.state = {
			isAuthenticated:true
		}
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
				signInUser:this.signInUser
			}}>
				{this.props.children}
			</AuthContext.Provider>
		)
	}
}
