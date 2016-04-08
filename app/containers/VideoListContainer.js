import VideoList from '../components/VideoList.js';
import searchYoutube from '../utils/utils.js';
import {connect} from 'react-redux';
import {setPlayingVideo} from '../actions/actions.js';

const mapStateToProps = (state, ownProps) => {
	return {
		videoList: state.videoList,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		itemClick: (video) => {
			dispatch(setPlayingVideo(video));
		}
	};
}

const VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
