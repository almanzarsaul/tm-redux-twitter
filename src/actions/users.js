import { RECIEVE_DATA, SET_AUTH_USER } from './types';

export const recieveUsers = users => ({
  type: RECIEVE_DATA,
  users
});

export const setAuthUsers = id => ({
  type: SET_AUTH_USER,
  id
});
