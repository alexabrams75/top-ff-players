import React from 'react';
// import PlayerItem from './PlayerItem';
import PlayerItem1 from './PlayerItem1';
import { WEEK, YEAR } from './constants';

const PlayerList = props => {
  const playerArr = Object.entries(props.players);
  playerArr.sort(
    (a, b) => b[1].stats.week[YEAR][WEEK].pts - a[1].stats.week[YEAR][WEEK].pts
  );
  console.log(playerArr);
  const renderedList = playerArr.slice(0, 50).map(player => {
    // console.log(player);
    return (
      <PlayerItem1
        key={player[0]}
        playerId={player[0]}
        stats={player[1].stats.week[YEAR][WEEK]}
      />
    );
  });

  // console.log(playerArr);
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default PlayerList;
