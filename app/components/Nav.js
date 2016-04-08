import Search from './Search.js';

const Nav = ({keyDown}) => {
	return (
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <Search navType={keyDown}/>
      </div>
    </nav>
  );

};

export default Nav;