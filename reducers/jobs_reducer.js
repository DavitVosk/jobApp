import * as aT from '../actions/types';

const INITIAL_STATE = {
  results: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case aT.FETCH_JOBS:
      return action.payload;
  }
  return state;
}
