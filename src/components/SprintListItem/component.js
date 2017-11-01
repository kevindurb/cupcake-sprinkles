import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SprintList extends Component {
  static propTypes = {
    sprint: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  };

  static defaultProps = {
    sprint: {},
  };

  render() {
    return (
      <div>
        {this.props.sprint.name}
      </div>
    );
  }
}

export default SprintList;
