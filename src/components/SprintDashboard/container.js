import { connect } from 'react-redux';
import * as sprintsSelectors from '../../selectors/sprints';
import * as sprintsActions from '../../ducks/sprints';

const mapState = () => {
  const selected = sprintsSelectors.makeSelectedSprintSelector();

  return (state, props) => ({
    sprint: selected(state, props),
  });
};

const mapDispatch = (dispatch, props) => ({
});

export default connect(mapState, mapDispatch);
