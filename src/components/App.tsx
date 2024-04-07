import React, { useState } from "react";

import { SearchBar } from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { Grid, Stack } from "@mui/material";

const App = () => {
  const [videoState, setVideoState] = useState({
    videos: [],
    selectedVideo: null,
  });

  const onTermSubmit = async (term: string) => {
    // import youtube api
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideoState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  const onVideoSelect = (video: any) => {
    setVideoState((prevState) => ({
      ...prevState,
      selectedVideo: video,
    }));
  };

  return (
    <Stack paddingX={10}>
      <SearchBar onFormSubmit={onTermSubmit} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={7} lg={8}>
          <VideoDetail video={videoState.selectedVideo} />
        </Grid>
        <Grid item xs={12} md={5} lg={4} sx={{ mt: 4 }}>
          <VideoList onVideoSelect={onVideoSelect} videos={videoState.videos} />
        </Grid>
      </Grid>
    </Stack>
  );
};
export default App;
