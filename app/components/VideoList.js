import React from 'react';
import VideoListEntry from './VideoListEntry';

const VideoList = ({videoList, itemClick}) => {
	return (
	  <div className="video-list media">
  		{videoList[0] ?
   		videoList.map(vid => <VideoListEntry video={vid} onClick={itemClick.bind(this,vid)} key={vid.etag}/>):
   		"Please enter query in search bar"}
  	</div>
	);
};

export default VideoList;