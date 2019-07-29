import React from 'react';
// import PlayerItem from './PlayerItem';
import PlayerItem1 from './PlayerItem1';

var year = 2018;
var week = 6;

const PlayerList = props => {
  const playerArr = Object.entries(props.players);
  playerArr.sort(
    (a, b) => b[1].stats.week[year][week].pts - a[1].stats.week[year][week].pts
  );
  console.log(playerArr);
  const renderedList = playerArr.map(player => {
    // console.log(player);
    return (
      <PlayerItem1
        key={player[0]}
        playerId={player[0]}
        stats={player[1].stats.week[year][week]}
      />
    );
  });

  // console.log(playerArr);
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default PlayerList;
