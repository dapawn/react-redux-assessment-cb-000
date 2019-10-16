import React from 'react';
import { NavLink } from 'react-router-dom';

const UserBubble = (props) => {
  return (
      <>
        {/* I had this in the Navbar.js, but got error when user logged out
            I thing that profile.isLoaded from firebase didn't get a chance
            to update in time, Maybe could have checked if auth.uid what set too*/}
        <li><NavLink to='/' className="btn btn-floating pink lihten-1">
        {props.profile.isLoaded ? props.profile.firstName[0] + props.profile.lastName[0] : null}  
        </NavLink></li>
      </>
  )
}

export default UserBubble;
