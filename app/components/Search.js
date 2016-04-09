import React from 'react';
import searchYoutube from '../utils/utils.js'
import {connect} from 'react-redux';
import {setVideoList, setPlayingVideo} from '../actions/actions.js'

let Search = ({dispatch}) => {

	let searchText = (e) => {
		searchYoutube({q: e.target.value})
		.then(q => {
			dispatch(setVideoList(q.items));
			dispatch(setPlayingVideo(q.items[0]));
		})
		.catch(e => console.log(e));
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
