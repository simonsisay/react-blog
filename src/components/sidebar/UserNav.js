 import React from 'react' 
 import { Menu  } from 'antd'
 import { Link } from 'react-router-dom'
import Search from '../common/Search'

const UserNav = () => {
	return(
		<div className="menu">
      <img 
        className="avatar-img" 
        src="https://www.ebunch.ca/wp-content/uploads/avatar-1.png" 
        className="mx-auto d-block" alt="..." />
      <div className="user-buttons">
        <Link to="/user"><button className="btn btn-sm btn-secondary">Profile</button></Link>
        <button className=" btn btn-sm btn-danger">Sign out</button>
      </div>
      <hr />
      <Search />
    </div>
	)
}

export default UserNav