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
            <React.Fragment>
                <Link to={{
                  pathname:`/user/${context.user.full_name.replace(' ', '')}`,
                  state:{
                    ownAccount:true,
                    id:context.user.facebook_id || context.user.id
                  }
                }}
                >
                <button 
                  className="btn btn-sm btn-secondary" 
                  >
                  Profile
                </button>
               </Link>
               <button 
                  className=" btn btn-sm btn-danger"
                  onClick={context.signOut}
                  >Sign out
                </button>
            </React.Fragment>
            )}
        </AuthContext.Consumer>
        </div>

        <hr />
    </div>
	)
}

export default UserNav