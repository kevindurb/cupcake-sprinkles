import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

class EditingBanner extends Component {
  static propTypes = {
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    classes: PropTypes.object,
  };

  static defaultProps = {
    onChange: R.identity,
    onCancel: R.identity,
  };

  render() {
    const classes = this.props.classes || {};

    return (
      <div className={classes.banner}>
        <div>You have made changes!</div>
        <div>
          <button
            className={classes.undo}
          >Undo</button>
          <button
            className={classes.save}
            onClick={this.props.onSave}
          >Save</button>
        </div>
      </div>
    );
  }
}

export default EditingBanner;
