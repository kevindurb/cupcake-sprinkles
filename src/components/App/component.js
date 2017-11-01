import React, { Component } from 'react';
import SprintList from '../SprintList';
import SprintDashboard from '../SprintDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <SprintList />
        <SprintDashboard />
      </div>
    );
  }
}

export default App;
