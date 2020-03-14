import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onTermSubmit('React Course');
  };

  onTermSubmit = async (term) => {
    // import youtube api
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return(
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
          <div className="col-12 col-md-7 col-lg-8 eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="ui col-12 col-md-5 col-lg-4 five wide column mt-4">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
