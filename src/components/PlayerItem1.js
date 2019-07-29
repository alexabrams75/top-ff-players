import React from 'react';
import cheerio from 'cheerio';
import axios from 'axios';

class PlayerItem1 extends React.Component {
  state = {
    playerName: '',
    points: this.props.stats.pts,
    playerNum: '',
    playerId: this.props.playerId,
    playerPic: '',
  };

  loadPlayerInfo = async () => {
    var url = `http://www.nfl.com/player/philiprivers/${this.props.playerId}/profile`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data, { normalizeWhiteSpace: true });
    this.setState({
      playerName: $('.player-name').text(),
      playerNum: $('.player-number').text(),
    });
    console.log($('.player-name').text());
  };

  componentDidMount() {
    this.loadPlayerInfo();
  }

  render() {
    var points = this.state.points;
    points = Math.round(points * 100) / 100;

    return (
      <div className="item">
        <div className="player-name">{this.state.playerName}</div>
        <div>Pts: {points}</div>
      </div>
    );
  }
}

export default PlayerItem1;
