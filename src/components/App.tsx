import React, { useState } from "react";

import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

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
    <div className='ui container'>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='col-12 col-md-7 col-lg-8 eleven wide column'>
            <VideoDetail video={videoState.selectedVideo} />
          </div>
          <div className='ui col-12 col-md-5 col-lg-4 five wide column mt-4'>
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videoState.videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
