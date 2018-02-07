import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../store/actions';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onInputChange = (e) => {
    const term = e.target.value;
    this.setState(state => ({ term }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState(state => ({ term: '' }));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-group mt-5">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Get a five day forecast for your city"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-outline-secondary btn-lg">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fetchWeather: city => dispatch(fetchWeather(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
