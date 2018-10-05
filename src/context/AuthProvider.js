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
		const token = localStorage.getItem("token");
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
