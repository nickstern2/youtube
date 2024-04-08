import axios from 'axios';


const REACT_APP_YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_KEY

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    // might need to = 'string'
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${REACT_APP_YOUTUBE_KEY}`
  }
});


