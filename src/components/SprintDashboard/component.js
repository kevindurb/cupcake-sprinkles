import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import EditableHeader from '../EditableHeader';
import EditingBanner from '../EditingBanner';

class SprintDashboard extends Component {
  static propTypes = {
    sprint: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      start: PropTypes.string,
      end: PropTypes.string,
    }),
    classes: PropTypes.object,
  };

  static defaultProps = {
    sprint: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      changed: false,
      sprint: props.sprint || {},
    }
  }

  componentWillReceiveProps(next) {
    if (this.props.sprint !== next.sprint) {
      this.setState({ sprint: next.sprint, changed: false });
    }
  }

  checkChanged(state) {
    const originalData = JSON.stringify(this.props.sprint);
    const newData = JSON.stringify(state.sprint);
    const changed = originalData !== newData;

    return update(state, { changed: { $set: changed } });
  }

  updateSprintProp = (prop, value) => this.setState(state => (
    this.checkChanged(update(state, {
      sprint: { [prop]: { $set: value } }
    }))
  ));

  onHeaderChange = (value) => this.updateSprintProp('name', value);

  renderEditingHeader() {
    if (this.state.changed) {
      return (
        <EditingBanner />
      );
    }

    return null;
  }

  render() {
    const classes = this.props.classes || {};

    return (
      <div className={classes.dashboard}>
        {this.renderEditingHeader()}
        <EditableHeader
          text={this.state.sprint.name}
          onChange={this.onHeaderChange}
        />
      </div>
    );
  }
}

export default SprintDashboard;
