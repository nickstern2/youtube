import axios from 'axios';

const KEY = 'AIzaSyA1N5igw3_AMGpE8q8uM5GGPgIDYW2f2uc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    // might need to = 'string'
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});


