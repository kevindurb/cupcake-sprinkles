import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import SprintListItem from '../SprintListItem';
import SprintToolbar from '../SprintToolbar';

class SprintList extends Component {
  static propTypes = {
    onLoad: PropTypes.func,
    sprintsIds: PropTypes.arrayOf(PropTypes.string),
    classes: PropTypes.object,
  };

  static defaultProps = {
    onLoad: R.identity,
    sprintsIds: [],
  };

  componentDidMount() {
    this.props.onLoad();
  }

  renderItem = (id) => (
    <SprintListItem key={id} id={id} />
  )

  render() {
    const classes = this.props.classes || {};

    return (
      <div className={classes.list}>
        <SprintToolbar />
        {this.props.sprintsIds.map(this.renderItem)}
      </div>
    );
  }
}

export default SprintList;
