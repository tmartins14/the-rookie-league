import axios from 'axios';
import React, { useEffect, useState } from 'react';
import KEY from '../apis/apiKey';
import '../input.css';

const Home = () => {
  // const [gameWeek, setGameWeek] = useState('');
  const [results, setResults] = useState([]);
  const [season, setSeason] = useState('2022REG');
  const [week, setWeek] = useState(1);
  // const KEY = KEY;

  useEffect(() => {
    const scores = async () => {
      const { data } = await axios.get(
        `https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/${season}/${week}`,
        {
          params: {
            key: KEY
          }
        }
      );
      // console.log(data);
      setResults(data);
    };
    scores();
  }, []);

  // console.log(results);
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Scores</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Week 1</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="px-4 py-5 sm:grid sm:grid-cols-5 justify-around">
            <dd className="text-sm font-medium text-gray-500">
              {results[0].HomeTeam}
            </dd>
            <dd className="text-sm font-medium text-gray-500">
              {results[0].HomeScore}
            </dd>
            <dd className="text-sm font-medium text-gray-500">
              {results[0].GameEndDateTime}
            </dd>
            <dd className="text-sm font-medium text-gray-500">
              {results[0].AwayScore}
            </dd>
            <dd className="text-sm font-medium text-gray-500">
              {results[0].AwayTeam}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Home;
