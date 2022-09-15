import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import ScoresByWeek from '../apis/ScoresByWeek';

const Home = () => {
  // const [gameWeek, setGameWeek] = useState('');
  const [results, setResults] = useState([]);
  const KEY = '5acca2ed7b004d5ebce353ccbec75e95';

  useEffect(() => {
    const scores = async () => {
      const season = '2022REG';
      const week = 1;
      const { data } = await axios.get(
        `https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/${season}/${week}`,
        {
          params: {
            key: KEY
          }
        }
      );
      console.log(data);
      setResults(data);
    };
    scores();
  }, []);

  // console.log(results);
  return <div>{results}</div>;
};

export default Home;
