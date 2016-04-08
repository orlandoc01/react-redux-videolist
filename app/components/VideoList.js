import VideoListEntry from './VideoListEntry';

const VideoList = ({videoList}) => {
	return (
	  <div className="video-list media">
  		{videoList ?
   		videoList.map(vid => <VideoListEntry video={vid} itemClick={true} key={vid.etag}/>):
   		"Please enter query in search bar"}
  	</div>
	);
};

export default VideoListEntry;