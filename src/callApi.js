import axios from 'axios';

const apiBase = process.env.REACT_APP_API;

export default (action, dispatch, getState) => (
  axios({
    ...action,
    url: `${apiBase}${action.url}`,
  })
);
