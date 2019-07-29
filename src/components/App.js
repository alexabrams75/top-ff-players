import React from 'react';
import PlayerList from './PlayerList';

class App extends React.Component {
  state = { players: {} };

  componentDidMount() {}

  render() {
    return (
      <div>
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;
