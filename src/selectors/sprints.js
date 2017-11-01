import { createSelector } from 'reselect';
import * as R from 'ramda';

export const makeSprintsDomainSelector = () => R.prop('sprints');
export const makeIdSelector = () => (state, props) => props.id;

export const makeAllSprintsSelector = () => createSelector(
  makeSprintsDomainSelector(),
  (sprintsDomain) =>
    R.values(sprintsDomain.all)
);

export const makeAllSprintsIdsSelector = () => createSelector(
  makeSprintsDomainSelector(),
  (sprintsDomain) =>
    R.keys(sprintsDomain.all)
);

export const makeSprintFromIdSelector = () => createSelector(
  makeSprintsDomainSelector(),
  makeIdSelector(),
  (sprintsDomain, id) =>
    sprintsDomain.all[id]
);

export const makeIdIsSelectedSelector = () => createSelector(
  makeSprintsDomainSelector(),
  makeIdSelector(),
  (sprintsDomain, id) =>
    sprintsDomain.selected === id
);
