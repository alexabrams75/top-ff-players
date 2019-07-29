import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.fantasy.nfl.com/v2/',
});
