import React, { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { LabelEnums } from "../reusable/label-enums";

type VideoDetailProps = {
  video: any;
};

const VideoDetail: FC<VideoDetailProps> = ({ video }) => {
  if (!video) {
    return (
      <Typography variant='body1'>{LabelEnums.SearchForAVideo}</Typography>
    );
  }

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Box
        sx={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 Aspect Ratio */,
          height: 0,
          overflow: "hidden",
        }}>
        <iframe
          title='video player'
          src={videoSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          allowFullScreen></iframe>
      </Box>
      <Paper sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant='h6'>{video.snippet.title}</Typography>
        <Typography variant='body1'>{video.snippet.description}</Typography>
      </Paper>
    </Paper>
  );
};

export default VideoDetail;
