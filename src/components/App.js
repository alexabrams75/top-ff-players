import React from 'react';
import PlayerList from './PlayerList';
import { WEEK, YEAR } from './constants';
import nfl from '../api/nfl';

class App extends React.Component {
  state = { playersObj: {}, players: [], loading: true };

  loadPlayerList = async () => {
    const response = await nfl.get('/players/weekstats', {
      params: {
        season: YEAR,
        week: WEEK,
        positionCategories: 'O',
      },
    });
    this.setState({ playersObj: response.data.games[102019].players });
  };

  componentDidMount() {
    this.loadPlayerList();
    // console.log(this.state.playersObj);
  }

  componentDidUpdate() {
    if (this.state.playersObj && this.state.loading) {
      this.setState({ loading: false });
    }
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="ui container">
          <PlayerList players={this.state.playersObj} />
        </div>
      );
    } else return <div>Loading...</div>;
  }
}

export default App;
