import { createAction } from 'redux-actions';
export const HOME = '@@currentLocation/HOME';
export const SPRINT = '@@currentLocation/SPRINT';
export const SPRINT_LIST = '@@currentLocation/SPRINT_LIST';

export const home = createAction(HOME);
export const sprint = createAction(SPRINT);
export const sprintList = createAction(SPRINT_LIST);

const redirectTo = action => dispatch => dispatch(action);

export default {
  [HOME]: { path: '/', thunk: redirectTo(sprintList()) },
  [SPRINT]: '/sprints/:id',
  [SPRINT_LIST]: '/sprints',
};
