import React from 'react' 
import { Menu  } from 'antd'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'


const UserNav = (props) => {
	return(
      <div className="menu">
        <img 
          className="avatar-img" 
          src={props.image} 
          className="mx-auto d-block" alt="..." 
        />

        <div className="user-buttons">
          <AuthContext.Consumer>
          {(context) => (
              <Link to={{
                pathname:`/user/${context.user.full_name.replace(' ', '')}`,
                state:{
                  ownAccount:true,
                  id:context.user.id
                }
              }}
              >
              <button className="btn btn-sm btn-secondary">
                Profile
              </button>
             </Link>
            )}
        </AuthContext.Consumer>
          <button className=" btn btn-sm btn-danger">Sign out</button>
        </div>

        <hr />
    </div>
	)
}

export default UserNav