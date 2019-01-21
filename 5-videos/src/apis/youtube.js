import axios from 'axios';

const KEY = 'AIzaSyAtEXlDDR8S0k4XMYRIUe83Bj-XShBRoPg';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});