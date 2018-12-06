import React, { Component } from 'react';
import SearchBarRhino from '../containers/search_bar_rhino'
import SearchBarWing from '../containers/search_bar_wing'
import CreateForm from '../containers/create_form'


class App extends Component {
  render() {
    return (
      <div>
        <SearchBarRhino />
        <SearchBarWing />
        <CreateForm /> 
      </div>
    );
  }
}

export default App;
