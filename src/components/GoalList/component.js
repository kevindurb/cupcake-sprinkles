import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

class GoalList extends Component {
  static propTypes = {
    onLoad: PropTypes.func,
    goalIds: PropTypes.arrayOf(PropTypes.string),
    classes: PropTypes.object,
  };

  static defaultProps = {
    onLoad: R.identity,
    goalIds: [],
  };

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const classes = this.props.classes || {};

    return (
      <div className={classes.list}>
      </div>
    );
  }
}

export default GoalList;
