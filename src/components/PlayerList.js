import React from 'react';
// import PlayerItem from './PlayerItem';
import PlayerItem1 from './PlayerItem1';
import { WEEK, YEAR } from './constants';
// import UpdateState from './UpdateState';

var playerArr = [];
var renderedList = [];

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { week: WEEK, year: YEAR, loading: true };
  }

  renderList = () => {
    playerArr = Object.entries(this.props.players);
    // console.log(playerArr);
    playerArr.sort(
      (a, b) =>
        b[1].stats.week[this.state.year][this.state.week].pts -
        a[1].stats.week[this.state.year][this.state.week].pts
    );
    renderedList = playerArr.slice(0, 50).map(player => {
      return (
        <PlayerItem1
          key={player[0]}
          playerId={player[0]}
          stats={player[1].stats.week[this.state.year][this.state.week]}
          num={playerArr.indexOf(player) + 1}
        />
      );
    });
  };

  componentDidMount() {
    if (this.state.loading) {
      this.setState({
        week: this.props.week,
        year: this.props.year,
        loading: false,
      });
    }
    this.renderList();
  }

  componentDidUpdate() {
    // if (this.state.loading) {
    //   this.setState({
    //     week: this.props.week,
    //     year: this.props.year,
    //     loading: false,
    //   });
    // }
    this.renderList();
  }

  render() {
    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}

export default PlayerList;
