import { connect } from 'react-redux';
import * as sprintsSagas from '../../sagas/sprints';
import * as sprintsSelectors from '../../selectors/sprints';

const mapState = () => {
  const allSprintsIds = sprintsSelectors.makeAllSprintsIdsSelector();
  return (state, props) => ({
    sprintsIds: allSprintsIds(state, props),
  });
};

const mapDispatch = {
  onLoad: sprintsSagas.fetchAll,
};

export default connect(mapState, mapDispatch);
