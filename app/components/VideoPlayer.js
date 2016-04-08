
const VideoPlayer = ({props}) => {
	return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={props.nowPlaying ? "https://www.youtube.com/embed/" + this.props.nowPlaying.id.videoId : ""} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.nowPlaying ? props.nowPlaying.snippet.title : "No Video Loaded"}</h3>
        <div>{props.nowPlaying ? props.nowPlaying.snippet.description : "Please select video to load in search bar"}</div>
      </div>
    </div>
  );
};

export default VideoPlayer;