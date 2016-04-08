import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Nav from './Nav.js';

const App = ({videoList, nowPlaying}) => {
  return (
  	<div>
  		<Nav keyDown={_.debounce(()=>{}, 500)} />
  		<div className="col-md-7">
    		<VideoPlayer nowPlaying={nowPlaying} />
  		</div>
  		<div className="col-md-5">
    		<VideoList videoList={videoList} listClick={true} />
  		</div>
		</div>
	);
}

export default App;