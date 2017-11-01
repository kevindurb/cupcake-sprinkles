import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
  };

  static defaultProps = {
    sprint: {},
  };

  render() {
    const classes = this.props.classes || {};
    return (
      <div className={classes.item}>
        <div className={classes.name}>
          {this.props.sprint.name}
        </div>
        <div className={classes.time}>
          <div className={classes.start}>
            {formatSprintDate(this.props.sprint.start)}
          </div>
          <div className={classes.end}>
            {formatSprintDate(this.props.sprint.end)}
          </div>
        </div>
      </div>
    );
  }
}

export default SprintList;
