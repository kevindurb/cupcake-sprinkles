import { connect } from 'react-redux';
import * as sprintsSelectors from '../../selectors/sprints';
import * as locationActions from '../../ducks/location';

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
    dispatch(locationActions.sprint({ id: props.id }));
  }
});

export default connect(mapState, mapDispatch);
