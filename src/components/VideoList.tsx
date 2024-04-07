import React, { FC } from "react";
import VideoItem from "./VideoItem";

type VideoListProps = {
  videos: any[];
  onVideoSelect: (video: any) => void;
};

const VideoList: FC<VideoListProps> = ({ videos, onVideoSelect }) => {
  const renderedList = videos?.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}
      />
    );
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
