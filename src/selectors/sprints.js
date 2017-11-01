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

export const makeSelectedIdSelector = () => createSelector(
  makeSprintsDomainSelector(),
  (sprintsDomain) =>
    sprintsDomain.selected
);

export const makeSelectedSprintSelector = () => createSelector(
  makeSprintsDomainSelector(),
  makeSelectedIdSelector(),
  (sprintsDomain, id) =>
    sprintsDomain.all[id]
);

export const makeIdIsSelectedSelector = () => createSelector(
  makeSelectedIdSelector(),
  makeIdSelector(),
  (selected, id) =>
    selected === id
);
