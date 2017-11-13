import { AsyncStorage } from 'react-native';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

const appId = '139127593402021';

// AsyncStorage.setItem('fb_token', token)
// AsyncStorage.getItem('fb_token')

export const fbLogin = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    console.log('token', token);

    // dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    if (token) {
      // Dispatch an action saying that FB login is done
      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    } else {
      // Show FB login screen
      let result = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
        permissions: ['public_profile']
      });

      if (result.type === 'cancel') {
        dispatch({ type: FACEBOOK_LOGIN_FAIL })
      }

      await AsyncStorage.setItem('fb_token', result.token);

      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    }
  }
};