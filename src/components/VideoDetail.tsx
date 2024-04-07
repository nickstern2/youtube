import React, { FC } from "react";

// TODO: Update with youtube types
type VideoDetailProps = {
  video: any;
};
const VideoDetail: FC<VideoDetailProps> = ({ video }) => {
  if (!video) {
    return <div>Search for a video</div>;
  }

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe title='video player' src={videoSrc}></iframe>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;