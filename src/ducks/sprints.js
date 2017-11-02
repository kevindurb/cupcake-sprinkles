import update from 'immutability-helper';
import { createAction } from 'redux-actions';

const MERGE = '@@sprints/MERGE';

export const merge = createAction(MERGE);

const initialState = {
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
    default:
      return state;
  }
};
