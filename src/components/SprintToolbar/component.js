import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

class SprintList extends Component {
  static propTypes = {
    onCreateNew: PropTypes.func,
  };

  static defaultProps = {
    onCreateNew: R.identity,
  };

  render() {
    const classes = this.props.classes || {};

    return (
      <div
        className={classes.toolbar}
      >
        <button
          onClick={this.props.onCreateNew}
          className={classes.button}
        >
          +
        </button>
      </div>
    );
  }
}

export default SprintList;
