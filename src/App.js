import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import AppBar from './components/appBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
