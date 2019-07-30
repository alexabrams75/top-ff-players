import React from 'react';
import cheerio from 'cheerio';
import axios from 'axios';
import './PlayerItem.css';

class PlayerItem1 extends React.Component {
  state = {
    playerName: '',
    points: this.props.stats.pts,
    playerNum: '',
    playerPic: '',
    playerTeam: '',
    passTD: 0,
    rushTD: 0,
    recTD: 0,
    int: 0,
  };

  loadPlayerInfo = async () => {
    var url = `http://www.nfl.com/player/philiprivers/${this.props.playerId}/profile`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data, { normalizeWhiteSpace: true });
    this.setState({
      playerName: $('.player-name').text(),
      playerNum: $('.player-number').text(),
      playerPic: $('.player-photo > img').attr('src'),
      playerTeam: $('.player-team-links > a')
        .text()
        .slice(0, -18),
    });
  };

  componentDidMount() {
    this.loadPlayerInfo();
    if (this.props.stats[6]) {
      this.setState({ passTD: this.props.stats[6] });
    }
    if (this.props.stats[15]) {
      this.setState({ rushTD: this.props.stats[15] });
    }
    if (this.props.stats[22]) {
      this.setState({ recTD: this.props.stats[22] });
    }
  }

  render() {
    var points = this.state.points;
    points = Math.round(points * 100) / 100;

    return (
      <div className="item">
        <div className="week-rank">{this.props.num}</div>
        <img
          className="ui image player-pic"
          src={this.state.playerPic}
          alt={this.state.playerName}
        />
        <div className="content">
          <div className="player-name header">
            {this.state.playerName.trim()}&nbsp;-&nbsp;{this.state.playerNum}
            <div className="player-team">{this.state.playerTeam}</div>
          </div>
          <div className="description">
            {/* If pass stats */}
            {this.props.stats[5] ? (
              <div className="passing-stats">
                <p>
                  Passing Yards: {this.props.stats[5]} - Passing TDs:{' '}
                  {this.state.passTD} - Int: {this.state.int}
                </p>
              </div>
            ) : null}
            {/* If rush stats */}
            {this.props.stats[14] ? (
              <div className="rush-stats">
                Rushing Yards: {this.props.stats[14]} - Rushing TDs:{' '}
                {this.state.rushTD}
              </div>
            ) : null}
            {/* If Rec stats */}
            {this.props.stats[20] ? (
              <div className="rec-stats">
                Receptions: {this.props.stats[20]} - Rec Yards:{' '}
                {this.props.stats[21]} - Rec TDs: {this.state.recTD}
              </div>
            ) : null}
            <div className="points">PPR Fantasy Points: {points}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerItem1;
