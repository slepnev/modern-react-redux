import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authResucer from './authResucer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authResucer,
  form: formReducer,
  streams: streamReducer
});