import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class SearchBarRhino extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange = (event) => {
    console.log(event.target.value)
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search for rhinos"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
         />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchWeather }, dispatch);
// }

export default SearchBarRhino
// connect(null, mapDispatchToProps)(SearchBar);
