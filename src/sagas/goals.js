import { normalize } from 'normalizr';
import * as goalApi from '../api/goals';
import * as goalActions from '../ducks/goals';
import goalSchema from '../schemas/goal';

export const fetchAllForSprint = (sprintId) =>
async (dispatch, getState, callApi) => {
  const result = await callApi(goalApi.getAllForSprint(sprintId));
  const data = normalize(result.data, [goalSchema]);
  if (data.entities.goals) {
    dispatch(goalActions.merge(data.entities.goals));
  }
};
