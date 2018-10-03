import React from 'react' 
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'


const UserNav = (props) => {

	return(
      <div className="menu">
        <img 
          className="avatar-img mx-auto d-block" 
          src={props.image} 
          alt="user pic" 
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
              <a href={`/user/${context.user.full_name.replace(' ', '')}`}>
              <button 
                onClick={() =>  window.location.reload()}
                className="btn btn-sm btn-secondary" 
                >
                Profile
              </button>
              </a>
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