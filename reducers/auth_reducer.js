import * as aT from '../actions/types';

export default (state = { token: null }, action) => {
  switch (action.type) {
    case aT.FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload };
    case aT.FACEBOOK_LOGIN_FAIL:
      return { toke: null };

  }
  return state;
}
