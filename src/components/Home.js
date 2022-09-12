import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ScoresByWeek from '../apis/ScoresByWeek';

const Home = () => {
  const [gameWeek, setGameWeek] = useState('');
  const KEY = '5acca2ed7b004d5ebce353ccbec75e95';

  useEffect(() => {
    const scores = async () => {
      const { data } = await axios.get(
        'https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek',
        {
          params: {
            format: 'JSON',
            season: '2022REG',
            week: 1,
            apikey: KEY
          }
        }
      );
    };
  }, []);

  return <div>{data}</div>;
};
