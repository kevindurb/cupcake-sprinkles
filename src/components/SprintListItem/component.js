import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import moment from 'moment';
import classnames from 'classnames';

const formatSprintDate = date =>
  moment(date).format('ll');

class SprintList extends Component {
  static propTypes = {
    sprint: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      start: PropTypes.string,
      end: PropTypes.string,
    }),
    classes: PropTypes.object,
    onSelect: PropTypes.func,
    selected: PropTypes.bool,
  };

  static defaultProps = {
    sprint: {},
    onSelect: R.identity,
    selected: false,
  };

  renderTime() {
    const start = this.props.sprint.start;
    const end = this.props.sprint.end;
    const classes = this.props.classes || {};

    if (!start) {
      return (
        <div className={classes.time}>
          Not Started
        </div>
      );
    }
    return [
      <div className={classes.time}>
        {formatSprintDate(start)}
      </div>,
      <div className={classes.time}>
        {formatSprintDate(end)}
      </div>
    ];
  }

  render() {
    const classes = this.props.classes || {};
    const itemClasses = classnames(
      classes.item,
      { [classes.selected]: this.props.selected },
    );

    return (
      <div
        className={itemClasses}
        onClick={this.props.onSelect}
      >
        <div className={classes.name}>
          {this.props.sprint.name}
        </div>
        <div className={classes.timeContainer}>
          {this.renderTime()}
        </div>
      </div>
    );
  }
}

export default SprintList;
