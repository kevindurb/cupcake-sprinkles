import { connect } from 'react-redux';
import * as goalsSagas from '../../sagas/goals';

const mapState = () => {
  return (state, props) => ({
  });
};

const mapDispatch = (dispatch, props) => ({
  onLoad() {
    dispatch(goalsSagas.fetchAllForSprint(props.sprintId))
  }
});

export default connect(mapState, mapDispatch);
