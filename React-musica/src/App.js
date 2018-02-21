import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Artist from './components/Artist';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/artist/:artistId" component={Artist} />
        </div>
      </Router>
    );
  }
}

export default App;
