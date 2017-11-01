import { connect } from 'react-redux';
import * as sprintsSagas from '../../sagas/sprints';

const mapState = () => {
  return (state, props) => ({
  });
};

const mapDispatch = {
  onCreateNew: sprintsSagas.addNew
};

export default connect(mapState, mapDispatch);
