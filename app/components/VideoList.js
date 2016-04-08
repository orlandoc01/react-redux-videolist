import VideoListEntry from './VideoListEntry';

const VideoList = ({props}) => {
	return (
	  <div className="video-list media">
  		{props.videoList ?
   		this.props.videoList.map(vid => <VideoListEntry video={vid} itemClick={true} key = {vid.etag}/>):
   		"Please enter query in search bar"}
  	</div>
	);
};

export default VideoListEntry;