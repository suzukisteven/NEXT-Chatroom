import React, { Component } from 'react';
import './App.css';
import UserSidebar from './components/UserSidebar'
import MainContainer from './containers/MainContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <UserSidebar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
