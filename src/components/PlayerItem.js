import React from 'react';
import cheerio from 'cheerio';
import axios from 'axios';
// import playerInfo from '../api/playerInfo';

var points = '';
var url = '';
var playerName = '';
// var jerseyNum = '';
// var playerPic = '';
// var position = '';

const PlayerItem = ({ playerId, stats }) => {
  // if (stats[20]) {
  //   points = stats.pts - stats[20] / 2;
  // } else points = stats.pts;
  points = stats.pts;
  points = Math.round(points * 100) / 100;

  url = `http://www.nfl.com/player/philiprivers/${playerId}/profile`;
  // console.log(url);

  axios.get(url).then(
    response => {
      if (response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html, { normalizeWhiteSpace: true });
        console.log($('.player-name').text());
        playerName = $('.player-name').text();
      }
    },
    err => console.log(err)
  );

  loadPlayerInfo;

  return (
    <div className="item">
      <div className="player-name">{playerName}</div>
      <div>Pts: {points}</div>
    </div>
  );
};

export default PlayerItem;
