import React from 'react';
import PlayerList from './PlayerList';
import nfl from '../api/nfl';

class App extends React.Component {
  state = { players: [] };

  loadPlayerList = async () => {
    const response = await nfl.get('/players/weekstats', {
      params: {
        season: 2017,
        week: 6,
        positionCategories: 'O',
      },
    });
    this.setState({ players: response.data.games[102019].players });
    console.log(this.state.players);
  };

  componentDidMount() {
    this.loadPlayerList();
  }

  render() {
    return (
      <div>
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;
