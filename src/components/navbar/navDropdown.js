import React, { Component } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Fa, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import axios from 'axios'


class NavDropDown extends Component{
 	constructor(props){
 		super(props);
 		this.state = {
 		isSpinning:false,
 		readLater:[],
        favourite:[],
 		}
 	}

	getBookmarked = () => {
        this.setState({isSpinning:true})
        axios({
            method:'get',
            url:'https://ethblogi1.herokuapp.com/api/blog/get/readLater',
            headers:{
            	authorization:this.props.token
        }})
        .then(response => {
            console.log(response)
            this.setState({readLater:response.data[1].rows, isSpinning:false})
        })
        .catch(error => {
            console.log(error)
        })
    }

	 getFavourites = () => {
        this.setState({isSpinning:true})
        axios({
            method:'get',
            url:'https://ethblogi1.herokuapp.com/api/blog/get/Favorite',
            headers:{
            	authorization:this.props.token
        }})
        .then(response => {
            console.log(response)
            this.setState({favourite:response.data[1].rows, isSpinning:false})
        })
        .catch(error => {
            console.log(error)
        })
    }


   deleteBookMarked = (id) => {
      const deletedList = this.state.favourite.filter(item =>  item.id !== id )
        this.setState({readLater:deletedList})
        axios({
            method:'delete',
            url:`https://ethblogi1.herokuapp.com/api/blog/Delete/readLater/${id}`,
            headers:{
            	authorization:this.props.token
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    }

   deleteFavourite = (id) => {
        const deletedList = this.state.favourite.filter(item =>  item.id !== id )
        this.setState({favourite:deletedList})
        axios({
            method:'delete',
            url:`https://ethblogi1.herokuapp.com/api/blog/Delete/Favorite/${id}`,
            headers:{
            	authorization:this.props.token,
        }})
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }


	render(){
		return(
         <AuthContext.Consumer>
         {
            (context) => (
                context.isAuthenticated
                ?

                <React.Fragment>
                    <NavItem className="nav-item-underline">
                    <Dropdown>
                        <DropdownToggle nav caret onClick={this.getBookmarked}>
                            Saved for later
                        </DropdownToggle>

                        <DropdownMenu>
                         {
                        this.state.isSpinning 
                        ? 
                            <Fa icon="spinner" spin size="2x" className="spinner-icon"/>
                        :
                        this.state.readLater.length === 0
                         ? 
                            <p className="text-center">List is empty</p>
                        :
                            this.state.readLater.map(item => (
                                   <div className="nav-dropdown-list" key={item.id}>
                                     <DropdownItem href={`/blog/${item.blog_id}`} >
                                        {item.title}
                                     </DropdownItem>
                                     <Fa icon="close" onClick={() => this.deleteBookMarked(item.id)}/>
                                  </div>
                            ))
                        }
                        </DropdownMenu>

                    </Dropdown>
                    </NavItem>
                    <NavItem>
                     <Dropdown>
                        <DropdownToggle nav caret onClick={this.getFavourites}>
                            Favourites
                        </DropdownToggle>

                         <DropdownMenu className="favourite-dropdown">
                         {
                        this.state.isSpinning 
                        ? 
                            <Fa icon="spinner" spin size="2x" className="spinner-icon"/>
                        :
                        this.state.favourite.length === 0
                         ? 
                            <p className="text-center">List is empty</p>
                         :
                            this.state.favourite.map(item => (
                                <div className="nav-dropdown-list" key={item.id}>
                                     <DropdownItem href={`/blog/${item.blog_id}`} >
                                        {item.title}
                                     </DropdownItem>
                                      <Fa icon="close" onClick={() => this.deleteFavourite(item.id)}/>
                                </div>
                            ))
                        }
                        </DropdownMenu>

                    </Dropdown>
                  </NavItem>
                </React.Fragment>

                : ''

            )
         }
        </AuthContext.Consumer>
		)
	}
}

export default NavDropDown