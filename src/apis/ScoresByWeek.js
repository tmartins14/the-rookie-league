import axios from 'axios';

const KEY = '5acca2ed7b004d5ebce353ccbec75e95';
const baseURL = 'https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek';

export default axios.create({
  baseURL: baseURL,
  params: {
    format: 'JSON',
    season: season,
    week: week,
    apikey: KEY
  }
});
