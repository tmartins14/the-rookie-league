import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import KEY from '../apis/apiKey';
import '../input.css';

const Home = () => {
  // const [gameWeek, setGameWeek] = useState('');

  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const weekOptions = weeks.map((week) => {
    return { label: String(week), value: week };
  });
  // console.log(weekOptions);

  const [selected, setSelected] = useState(1);
  const [results, setResults] = useState([]);
  const [season, setSeason] = useState('2022REG');
  // const [defaultWeek, setDefaultWeek] = useState(true);

  // Get Current Week - Default
  // useEffect(() => {
  //   if (defaultWeek) {
  //     const currentWeek = async () => {
  //       const { data } = await axios.get(
  //         `https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek`,
  //         {
  //           params: {
  //             key: KEY
  //           }
  //         }
  //       );
  //       setSelected(data);
  //     };
  //     currentWeek();
  //     setDefaultWeek(false);
  //   }
  // }, []);

  // console.log('Current Week:', selected);

  // // Get Current Season - Default
  // useEffect(() => {
  //   const currentSeason = async () => {
  //     const { data } = await axios.get(
  //       `https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason`,
  //       {
  //         params: {
  //           key: KEY
  //         }
  //       }
  //     );
  //     setSeason(data);
  //   };
  //   currentSeason();
  // }, []);

  // Pull Scores for Selected season and week
  useEffect(() => {
    console.log(selected);
    const scores = async () => {
      const { data } = await axios.get(
        `https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/${season}/${selected}`,
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
  }, [selected]);

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

  // console.log(results);
  return (
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pg-20 bg-[#acc5fa]">
      <div className="container">
        <div className="overflow-hidden sm:rounded-lg w-full md:w-2/3 xl:w-2/3 px-4">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Scores
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Week {selected}
            </p>
          </div>
          <div>
            <Dropdown
              label="Select a Week"
              selected={selected}
              onSelectedChange={setSelected}
              options={weekOptions}
            />
            <div className="border-t bg-white border-gray-200 shadow sm:rounded-lg">
              {gameScores}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
