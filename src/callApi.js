import axios from 'axios';

const apiBase = process.env.API;

export default (action, dispatch, getState) => (
  axios({
    ...action,
    url: `${apiBase}${action.url}`,
  })
);
