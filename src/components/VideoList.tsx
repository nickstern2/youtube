import React, { FC } from "react";
import VideoItem from "./VideoItem";
import { ListItem, Box, List } from "@mui/material";

type VideoListProps = {
  videos: any[];
  onVideoSelect: (video: any) => void;
};
const listItemHeight = 120;

const VideoList: FC<VideoListProps> = ({ videos, onVideoSelect }) => {
  const renderedList = videos?.map((video) => (
    <ListItem
      disablePadding
      key={video.id.videoId}
      sx={{ height: listItemHeight, overflow: "hidden" }}>
      <VideoItem onVideoSelect={onVideoSelect} video={video} />
    </ListItem>
  ));

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List
        disablePadding
        component='nav'
        aria-label='secondary mailbox folders'>
        {renderedList}
      </List>
    </Box>
  );
};

export default VideoList;
