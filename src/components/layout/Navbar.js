import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import UserBubble from './UserBubble';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import M from "materialize-css";

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  const bubble = auth.uid ? <UserBubble profile={profile} /> : null
  
  //Intialize MaterializeCSS Dropdown menus
  let dropdowns = document.querySelectorAll('.dropdown-trigger');
  let options = {
    inDuration: 300,
    outDuration: 300,
    hover: true, // Activate on hover
    coverTrigger: false // Displays dropdown below the button
  };
  M.Dropdown.init(dropdowns, options);

  return (
    <>
    {/*  <!-- Dropdown Structure --> */}
    <ul id="dropdown1" className="dropdown-content">
      { links }
    </ul>

    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo "><i class="material-icons">insert_comment</i> YARticulate </Link>
        {/* For Desktop/Laptops w/ larger screens */}
        <ul className="right hide-on-med-and-down">
          { links }
          { bubble }
        {/* For tablets and phones with narrower screens */}
        </ul>
        <ul className="left hide-on-large-only">
          <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons right">menu</i></a></li>
        </ul>
        <ul className="right hide-on-large-only">
          { bubble }
        </ul>
      </div>
    </nav>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
