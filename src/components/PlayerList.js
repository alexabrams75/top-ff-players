import React from 'react';
// import PlayerItem from './PlayerItem';
import PlayerItem1 from './PlayerItem1';
// import { WEEK, YEAR } from './constants';
// import UpdateState from './UpdateState';

var playerArr = [];
var renderedList = [];

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { week: '16', year: '2018', loading: true };
    // this.UpdateState = UpdateState.bind(this);
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
    // this.setState({ loading: false });
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
    if (this.state.loading) {
      this.setState({
        week: this.props.week,
        year: this.props.year,
        loading: false,
      });
    }
    this.renderList();
  }

  render() {
    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}

// const PlayerList = props => {
//   const playerArr = Object.entries(props.players);
//   playerArr.sort(
//     (a, b) =>
//       b[1].stats.week[props.year][props.week].pts -
//       a[1].stats.week[props.year][props.week].pts
//   );
//   // console.log(playerArr);
//   const renderedList = playerArr.slice(0, 50).map(player => {
//     // console.log(player);
//     return (
//       <PlayerItem1
//         key={player[0]}
//         playerId={player[0]}
//         stats={player[1].stats.week[props.year][props.week]}
//         num={playerArr.indexOf(player) + 1}
//       />
//     );
//   });
//
//   // console.log(playerArr);
//   return <div className="ui relaxed divided list">{renderedList}</div>;
// };

export default PlayerList;
