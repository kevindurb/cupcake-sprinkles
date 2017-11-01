import { connect } from 'react-redux';
import * as sprintsSelectors from '../../selectors/sprints';

const mapState = () => {
  const sprint = sprintsSelectors.makeSprintFromIdSelector();
  return (state, props) => ({
    sprint: sprint(state, props),
  });
};

const mapDispatch = {
};

export default connect(mapState, mapDispatch);
