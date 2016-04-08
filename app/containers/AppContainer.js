import App from '../components/App.js';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	return {
		videoList: state.videoList,
		nowPlaying: state.nowPlaying
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
