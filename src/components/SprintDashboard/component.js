import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import EditableHeader from '../EditableHeader';

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

  constructor(props) {
    super(props);

    this.state = {
      data: props.sprint || {},
    }
  }

  componentWillReceiveProps(next) {
    if (this.props.sprint !== next.sprint) {
      this.setState({ data: next.sprint });
    }
  }

  render() {
    const classes = this.props.classes || {};

    return (
      <div
        className={classes.dashboard}
        onClick={this.props.onSelect}
      >
        <EditableHeader text={this.state.data.name} />
      </div>
    );
  }
}

export default SprintList;
