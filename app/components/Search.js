import {connect} from 'react-redux';

let Search = ({dispatch}) => {

	let searchText = (e) => {
		console.log(e);
	};
	return (
		<div className="search-bar form-inline">
	  	<input className="form-control" type="text" onKeyUp={searchText}/>
	  	<button className="btn hidden-sm-down">
	  	  <span className="glyphicon glyphicon-search"></span>
	  	</button>
		</div>
	); 
};

Search = connect()(Search);

export default Search;
