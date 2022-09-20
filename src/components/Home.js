import axios from 'axios';
import React, { useEffect, useState } from 'react';
import KEY from '../apis/apiKey';
import '../input.css';

const Home = () => {
  // const [gameWeek, setGameWeek] = useState('');
  const [results, setResults] = useState([]);
  const [season, setSeason] = useState('');
  const [week, setWeek] = useState();

  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  useEffect(() => {
    // Get Current Week - Default
    const currentWeek = async () => {
      const { data } = await axios.get(
        `https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek`,
        {
          params: {
            key: KEY
          }
        }
      );
      setWeek(data);
    };
    currentWeek();
  }, []);

  console.log(week);

  useEffect(() => {
    // Get Current Season - Default
    const currentSeason = async () => {
      const { data } = await axios.get(
        `https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason`,
        {
          params: {
            key: KEY
          }
        }
      );
      setSeason(data);
    };
    currentSeason();
  }, []);

  useEffect(() => {
    // Pull Scores for Selected season and week
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

  // Render Table
  const gameScores = results.map((result) => {
    return (
      <dl>
        <div className="px-4 py-5 sm:grid sm:grid-cols-5 justify-around">
          <dd className="text-sm font-medium text-gray-500">
            {result.HomeTeam}
          </dd>
          <dd className="text-sm font-medium text-gray-500">
            {result.HomeScore}
          </dd>
          <dd className="text-sm font-medium text-gray-500">
            {result.GameEndDateTime}
          </dd>
          <dd className="text-sm font-medium text-gray-500">
            {result.AwayScore}
          </dd>
          <dd className="text-sm font-medium text-gray-500">
            {result.AwayTeam}
          </dd>
        </div>
      </dl>
    );
  });

  console.log(results);
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Scores</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Week {week}</p>
      </div>
      <div className="border-t border-gray-200">{gameScores}</div>
    </div>
  );
};

export default Home;
