
const VideoListEntry = ({props}) => {
	return (
		<div className="video-list-entry" onClick={}>
      <div className="media-left media-middle">
        <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoListEntry;