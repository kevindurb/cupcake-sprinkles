import { createAction } from 'redux-actions';
export const HOME = '@@currentLocation/HOME';
export const ADMIN_HOME = '@@currentLocation/ADMIN_HOME';
export const ADMIN_POSTS = '@@currentLocation/ADMIN_POSTS';
export const ADMIN_POST_EDIT = '@@currentLocation/ADMIN_POST_EDIT';

export const home = createAction(HOME);
export const adminHome = createAction(ADMIN_HOME);
export const adminPosts = createAction(ADMIN_POSTS);
