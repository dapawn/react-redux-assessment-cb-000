import React from 'react';
import Nav from './Nav';
import bgImg from '../mosaic_header.png';

function Header() {

  const divStyle = { 
    marginBottom: 0, 
    backgroundImage: "url(" + bgImg + ")", 
    backgroudSize: 'cover' 
  };

  return (
    <React.Fragment>
        <div className="jumbotron card h-100 justify-content-end" style={divStyle}>
      <p>HomeSchool Coop</p>
      </div>
      < Nav />
    </React.Fragment>
  )
}

export default Header;
