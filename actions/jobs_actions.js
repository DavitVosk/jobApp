import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import { FETCH_JOBS, LIKE_JOB, DELETE_LIKED_JOB } from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';

const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });

  return `${JOB_ROOT_URL}${query}`
}

export const fetchJobs = (region) => async (dispatch) => {
  try {
    // takes region lattitude and longtute and returns the zip code for this region
    let zip = await reverseGeocode(region);
    const url = buildJobsUrl(zip);

    //get the list of jobs
    let { data } = await axios.get(url);

    dispatch({ type: FETCH_JOBS, payload: data });
  } catch (e) {
    console.error(e);
  }
};

export const likeJob = (job) => {
  return { type: LIKE_JOB, payload: job }
};

export const deleteLikedJobs = () => {
  return { type: DELETE_LIKED_JOB }
};
