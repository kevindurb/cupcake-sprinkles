import { normalize } from 'normalizr';
import * as R from 'ramda';
import * as sprintApi from '../api/sprints';
import * as sprintActions from '../ducks/sprints';
import * as locationActions from '../ducks/location';
import sprintSchema from '../schemas/sprint';
import * as sprintSelectors from '../selectors/sprints';

const omitId = R.omit(['id']);

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
  const hasNewSprint = sprintSelectors.makeHasNewSprintSelector()(getState());
  if (!hasNewSprint) {
    const data = normalize(newSprint, sprintSchema);
    dispatch(sprintActions.merge(data.entities.sprints));
  }
  dispatch(locationActions.sprint({ id: 'new' }));
};

export const save = (sprint) =>
async (dispatch, getState, callApi) => {
  if (sprint.id === 'new') {
    const sprintData = omitId(sprint);
    const result = await callApi(sprintApi.create(sprintData));
    const data = normalize(result.data, sprintSchema);
    const newId = result.data.id;
    dispatch(sprintActions.merge(data.entities.sprints));
    dispatch(sprintActions.deleteSprint('new'));
    dispatch(locationActions.sprint({ id: newId }));
  } else {
    const result = await callApi(sprintApi.update(sprint));
    const data = normalize(result.data, sprintSchema);
    dispatch(sprintActions.merge(data.entities.sprints));
  }
};
