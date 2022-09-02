import axios from 'axios';

const KEY = 'MY_ESPN_KEY';

export default axios.create({
  baseURL: 'http://api.espn.com/',
  params: {
    version: 'v1',
    resource: '/sports/football/nfl',
    apikey: KEY
  }
});
