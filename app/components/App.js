import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Nav from './Nav.js';

const App = ({videoList, nowPlaying}) => {
  return (
  	<div>
  		<Nav />
  		<div className="col-md-7">
    		<VideoPlayerContainer />
  		</div>
  		<div className="col-md-5">
    		<VideoListContainer />
  		</div>
		</div>
	);
}

export default App;