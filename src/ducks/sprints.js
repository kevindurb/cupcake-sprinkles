import update from 'immutability-helper';
import { createAction } from 'redux-actions';

const MERGE = '@@sprints/MERGE';
const SELECT = '@@sprints/SELECT';

export const merge = createAction(MERGE);
export const select = createAction(SELECT);

const initialState = {
  selected: '',
  all: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MERGE: {
      const entities = action.payload;
      return update(state, {
        all: { $merge: entities },
      });
    }
    case SELECT: {
      const id = action.payload;
      return update(state, {
        selected: { $set: id },
      });
    }
    default:
      return state;
  }
};
