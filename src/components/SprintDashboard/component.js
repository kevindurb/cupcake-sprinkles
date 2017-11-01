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

  render() {
    const classes = this.props.classes || {};

    return (
      <div
        className={classes.dashboard}
        onClick={this.props.onSelect}
      >
        <h1 className={classes.name}>
          {this.props.sprint.name}
        </h1>
      </div>
    );
  }
}

export default SprintList;
