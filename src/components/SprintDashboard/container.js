import { connect } from 'react-redux';
import * as sprintsSelectors from '../../selectors/sprints';
import * as sprintsSagas from '../../sagas/sprints';

const mapState = () => {
  const selected = sprintsSelectors.makeSelectedSprintSelector();

  return (state, props) => ({
    sprint: selected(state, props),
  });
};

const mapDispatch = {
  onSaveNew: sprintsSagas.save,
};

export default connect(mapState, mapDispatch);
