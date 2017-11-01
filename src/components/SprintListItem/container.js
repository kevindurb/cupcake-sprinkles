import { connect } from 'react-redux';
import * as sprintsSelectors from '../../selectors/sprints';
import * as sprintsActions from '../../ducks/sprints';

const mapState = () => {
  const sprint = sprintsSelectors.makeSprintFromIdSelector();
  const selected = sprintsSelectors.makeIdIsSelectedSelector();

  return (state, props) => ({
    sprint: sprint(state, props),
    selected: selected(state, props),
  });
};

const mapDispatch = (dispatch, props) => ({
  onSelect() {
    dispatch(sprintsActions.select(props.id));
  }
});

export default connect(mapState, mapDispatch);
