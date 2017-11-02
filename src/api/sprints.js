export const getAll = () => ({
  url: '/sprints',
});

export const update = (sprint) => ({
  method: 'PUT',
  url: `/sprints/${sprint.id}`,
  data: sprint,
});

export const create = (sprint) => ({
  method: 'POST',
  url: `/sprints`,
  data: sprint,
});
