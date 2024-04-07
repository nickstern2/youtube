import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type VideoItemProps = {
  video: any;
  onVideoSelect: (video: any) => void;
};

const VideoItem: React.FC<VideoItemProps> = ({ video, onVideoSelect }) => {
  return (
    <Card sx={{ display: "flex", cursor: "pointer", marginBottom: 2 }}>
      <CardActionArea
        onClick={() => onVideoSelect(video)}
        sx={{ display: "flex", alignItems: "center" }}>
        <CardMedia
          component='img'
          sx={{ width: 180 }}
          image={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <CardContent
          sx={{
            flex: "1",
            padding: 0,
            paddingLeft: 1.5,
          }}>
          <Typography variant='subtitle1'>{video.snippet.title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoItem;
