import React from 'react';

const VideoPlayer = ({nowPlaying}) => {
  console.log('nowPlaying is', nowPlaying);
	return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={nowPlaying.id ? "https://www.youtube.com/embed/" + nowPlaying.id.videoId : ""} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{nowPlaying.snippet ? nowPlaying.snippet.title : "No Video Loaded"}</h3>
        <div>{nowPlaying.snippet ? nowPlaying.snippet.description : "Please select video to load in search bar"}</div>
      </div>
    </div>
  );
};

export default VideoPlayer;