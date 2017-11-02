import { normalize } from 'normalizr';
import * as sprintApi from '../api/sprints';
import * as sprintActions from '../ducks/sprints';
import * as locationActions from '../ducks/location';
import sprintSchema from '../schemas/sprint';

const newSprint = {
  id: 'new',
  name: 'New Sprint',
}

export const fetchAll = () =>
async (dispatch, getState, callApi) => {
  const result = await callApi(sprintApi.getAll());
  const data = normalize(result.data, [sprintSchema]);
  dispatch(sprintActions.merge(data.entities.sprints));
};

export const addNew = () =>
async (dispatch, getState, callApi) => {
  const data = normalize(newSprint, sprintSchema);
  dispatch(sprintActions.merge(data.entities.sprints));
  dispatch(locationActions.sprint({ id: 'new' }));
};
