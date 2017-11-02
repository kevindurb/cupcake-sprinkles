import update from 'immutability-helper';
import { createAction } from 'redux-actions';

const MERGE = '@@sprints/MERGE';
const DELETE = '@@sprints/DELETE';

export const merge = createAction(MERGE);
export const deleteSprint = createAction(DELETE);

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
    case DELETE: {
      const id = action.payload;
      return update(state, {
        all: { $unset: [id] },
      });
    }
    default:
      return state;
  }
};
