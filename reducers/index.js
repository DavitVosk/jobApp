// import { combineReducers } from 'redux';
import auth from './auth_reducer';
import jobs from './jobs_reducer';
import likedJobs from './like_reducer';

import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

const config = {
  key: 'primary',
  storage
};

export default persistCombineReducers(config, {
  auth,
  jobs,
  likedJobs
})