import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

class EditableHeader extends Component {
  static propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func,
    classes: PropTypes.object,
  };

  static defaultProps = {
    text: '',
    onChange: R.identity,
  };

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    }
  }

  onEdit = () => this.setState({ isEditing: true });
  onDone = () => this.setState({ isEditing: false });
  onChange = (e) => this.props.onChange(e.target.value);

  renderInput() {
    const classes = this.props.classes || {};
    return (
      <input
        type="text"
        value={this.props.text}
        onBlur={this.onDone}
        onChange={this.onChange}
        className={classes.input}
        autoFocus
      />
    );
  }

  renderHeader() {
    const classes = this.props.classes || {};
    return (
      <h1
        onClick={this.onEdit}
        className={classes.header}
      >
        {this.props.text}
      </h1>
    );
  }

  render() {
    return this.state.isEditing
      ? this.renderInput()
      : this.renderHeader();
  }
}

export default EditableHeader;
