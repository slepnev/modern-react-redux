import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authResucer from './authResucer';

export default combineReducers({
  auth: authResucer,
  form: formReducer
});