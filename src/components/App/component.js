import React, { Component } from 'react';
import SprintList from '../SprintList';
import SprintDashboard from '../SprintDashboard';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

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
