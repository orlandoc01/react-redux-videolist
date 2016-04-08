import React from 'react';
import Search from './Search.js';

const Nav = ({keyDown}) => {
	return (
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <Search />
      </div>
    </nav>
  );

};

export default Nav;