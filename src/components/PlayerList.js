import React from 'react';
import nfl from '../api/nfl';

class PlayerList extends React.Component {
  state = { players: {} };

  loadPlayerList = async () => {
    const response = await nfl.get('/players/weekstats', {
      params: {
        season: 2017,
        week: 6,
        positionCategories: 'O',
      },
    });
    this.setState({ players: response.data.games[102019].players });
    console.log(this.state.players[310].stats.week[2017][6]);
  };

  componentDidMount() {
    this.loadPlayerList();
  }

  render() {
    return <div>List</div>;
  }
}

export default PlayerList;
