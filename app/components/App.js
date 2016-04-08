import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Nav from './Nav.js';

const App = ({props}) => {
  return (
  	<div>
  		<Nav keyDown={_.debounce(()=>{}, 500)} />
  		<div className="col-md-7">
    		<VideoPlayer nowPlaying={props.nowPlaying} />
  		</div>
  		<div className="col-md-5">
    		<VideoList videoList={props.videoList} listClick={} />
  		</div>
		</div>
	);
}

export default App;