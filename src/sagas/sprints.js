import { normalize } from 'normalizr';
import * as sprintApi from '../api/sprints';
import * as sprintActions from '../ducks/sprints';
import sprintSchema from '../schemas/sprint';

export const fetchAll = () =>
async (dispatch, getState, callApi) => {
  const result = await callApi(sprintApi.getAll());
  const data = normalize(result.data, [sprintSchema]);
  dispatch(sprintActions.merge(data.entities.sprints))
};
