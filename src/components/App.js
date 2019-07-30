import React from 'react';
import PlayerList from './PlayerList';
import Inputs from './Inputs';
// import UpdateState from './UpdateState';
// import { WEEK, YEAR } from './constants';
import nfl from '../api/nfl';

// var defYear = WEEK;
// var defWeek = 16;

class App extends React.Component {
  state = { playersObj: {}, loading: true, year: '2018', week: '16' };

  loadPlayerList = async (year, week) => {
    const response = await nfl.get('/players/weekstats', {
      params: {
        season: year,
        week: week,
        positionCategories: 'O',
      },
    });
    this.setState({ playersObj: response.data.games[102019].players });
  };

  onDateSubmit = (year, week) => {
    this.setState({ loading: true, year: year, week: week }, () =>
      this.loadPlayerList(year, week)
    );
  };

  componentDidMount() {
    this.loadPlayerList(this.state.year, this.state.week);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playersObj && this.state.loading) {
      this.setState({ loading: false });
    }
  }

  render() {
    if (!this.state.loading) {
      return (
        <div>
          <div className="ui container">
            <Inputs onDateSubmit={this.onDateSubmit} />
            <PlayerList
              players={this.state.playersObj}
              week={this.state.week}
              year={this.state.year}
            />
          </div>
        </div>
      );
    } else return <div>Loading...</div>;
  }
}

export default App;
