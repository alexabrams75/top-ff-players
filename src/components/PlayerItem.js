import React from 'react';

var points = '';

const PlayerItem = ({ playerId, stats }) => {
  if (stats[20]) {
    points = stats.pts - stats[20] / 2;
  } else points = stats.pts;

  points = Math.round(points * 100) / 100;

  return (
    <div className="item">
      <div>{playerId}</div>
      <div>Pts: {points}</div>
    </div>
  );
};

export default PlayerItem;
