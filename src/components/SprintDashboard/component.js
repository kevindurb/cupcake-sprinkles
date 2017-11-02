import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import update from 'immutability-helper';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

import EditableHeader from '../EditableHeader';
import EditingBanner from '../EditingBanner';
import GoalList from '../GoalList';

const formatDate = (date) => !!date ? date.toISOString() : null;

class SprintDashboard extends Component {
  static propTypes = {
    sprint: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      start: PropTypes.string,
      end: PropTypes.string,
    }),
    classes: PropTypes.object,
    onSaveNew: PropTypes.func,
  };

  static defaultProps = {
    sprint: {},
    onSaveNew: R.identity,
  };

  constructor(props) {
    super(props);

    this.state = {
      changed: false,
      sprint: props.sprint || {},
      focusedInput: null,
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
  onDatesChange = ({ startDate, endDate }) => {
    this.updateSprintProp('start', formatDate(startDate));
    this.updateSprintProp('end', formatDate(endDate));
  }

  onSave = () => {
    this.props.onSaveNew(this.state.sprint);
  }

  getStartDate = () => (
    !!this.state.sprint.start
    ? moment(this.state.sprint.start)
    : null
  )

  getEndDate = () => (
    !!this.state.sprint.end
    ? moment(this.state.sprint.end)
    : null
  )

  renderEditingHeader() {
    if (this.state.changed || this.props.sprint.id === 'new') {
      return (
        <EditingBanner
          onSave={this.onSave}
        />
      );
    }

    return null;
  }

  renderGoalList() {
    const sprintId = this.props.sprint.id;
    if (sprintId && sprintId !== 'new') {
      return (
        <GoalList sprintId={sprintId} />
      );
    }
    return null;
  }

  render() {
    const classes = this.props.classes || {};

    return (
      <div className={classes.dashboard}>
        {this.renderEditingHeader()}
        <div className={classes.top}>
          <div className={classes.headerContainer}>
            <EditableHeader
              text={this.state.sprint.name}
              onChange={this.onHeaderChange}
            />
          </div>
          <div className={classes.dateContainer}>
            <DateRangePicker
              startDate={this.getStartDate()}
              endDate={this.getEndDate()}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              isOutsideRange={R.always(false)}
              showClearDates
            />
          </div>
        </div>
        {this.renderGoalList()}
      </div>
    );
  }
}

export default SprintDashboard;
