import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        {routes}
      </div>
      </Router>
    );
  }
}

export default App;


// color code light blue #56C5FD navy #0C4B69 white white-ish blue #CFE9F6
