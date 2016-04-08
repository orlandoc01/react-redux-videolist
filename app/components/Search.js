
const Search = () => {
	return (
		<div className="search-bar form-inline">
	  	<input className="form-control" type="text" onKeyUp={true}/>
	  	<button className="btn hidden-sm-down">
	  	  <span className="glyphicon glyphicon-search"></span>
	  	</button>
		</div>
	); 
};

export default Search;
