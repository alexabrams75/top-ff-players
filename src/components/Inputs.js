import React from 'react';
import { WEEK, YEAR } from './constants';

class Inputs extends React.Component {
  state = { year: YEAR, week: WEEK };

  onYearChange = event => {
    var yearInt = parseInt(event.target.value);
    this.setState({ year: yearInt });
  };

  onWeekChange = event => {
    var weekInt = parseInt(event.target.value);
    this.setState({ week: weekInt });
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.year, this.state.week);
    this.props.onDateSubmit(this.state.year, this.state.week);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Year&nbsp;</label>
        <select value={this.state.year} onChange={this.onYearChange}>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
        </select>
        &nbsp;&nbsp;&nbsp;
        <label>Week&nbsp;</label>
        <select value={this.state.week} onChange={this.onWeekChange}>
          <option value="17">17</option>
          <option value="16">16</option>
          <option value="15">15</option>
          <option value="14">14</option>
          <option value="13">13</option>
          <option value="12">12</option>
          <option value="11">11</option>
          <option value="10">10</option>
          <option value="9">9</option>
          <option value="8">8</option>
          <option value="7">7</option>
          <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        &nbsp;&nbsp;&nbsp;
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Inputs;
