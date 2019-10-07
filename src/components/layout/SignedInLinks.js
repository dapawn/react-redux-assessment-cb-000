import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
      <ul className="right">
        <li><NavLink to='/post/new'>New Post</NavLink></li>
        <li><a onClick={props.signOut}>LogOut</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lihten-1">
        {props.profile.isLoaded ? props.profile.firstName[0] + props.profile.lastName[0] : null}  
        </NavLink></li>
      </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);
