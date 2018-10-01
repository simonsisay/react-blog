 import React from 'react' 
 import { Menu  } from 'antd'
 import { Link } from 'react-router-dom'
import {AuthContext} from '../../context/AuthProvider'


const UserNav = (props) => {
	return(
      <div className="menu">
        <img 
          className="avatar-img" 
          src={props.image} 
          className="mx-auto d-block" alt="..." 
        />

        <div className="user-buttons">
          <Link 
            to={{
              pathname:'/user',
              state:{
                ownAccount:true
              }
            }}
          >
            <button className="btn btn-sm btn-secondary">
              Profile
            </button>
          </Link>
          <button className=" btn btn-sm btn-danger">Sign out</button>
        </div>

        <hr />
    </div>
	)
}

export default UserNav