import axios from 'axios';
import { FETCH_USERS } from './types';

// action returns an propmise, but redux-promise will handle it
export function fetchUsers() {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');
  return {
    type: FETCH_USERS,
    payload: request
  };
}
