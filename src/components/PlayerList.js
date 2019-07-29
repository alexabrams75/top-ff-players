import React from 'react';

const PlayerList = ({ players }) => {
  // playersList = Array.from(props.players);
  // const renderedList = props.players.map(player => {
  //   return (
  //     <div>
  //       ${player}: Points: ${player.stats.week.year.week.pts}
  //     </div>
  //   );
  // });

  var player = players[310];
  var playerArr = Object.values(player);

  return <div>{playerArr}</div>;
};

export default PlayerList;
