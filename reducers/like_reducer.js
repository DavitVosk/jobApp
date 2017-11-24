import _ from 'lodash';
import * as aT from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case aT.LIKE_JOB:
      return _.uniqBy([
        action.payload, ...state
      ],'jobkey')
  }
  return state;
}
