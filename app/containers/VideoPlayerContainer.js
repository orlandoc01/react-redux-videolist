import VideoPlayer from '../components/VideoPlayer.js';
import searchYoutube from '../utils/utils.js';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => {
	return {
		nowPlaying: state.nowPlaying
	};
};


const VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

export default VideoPlayerContainer;