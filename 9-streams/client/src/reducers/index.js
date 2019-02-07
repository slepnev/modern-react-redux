import { combineReducers } from 'redux';
import authResucer from './authResucer';

export default combineReducers({
  auth: authResucer
});