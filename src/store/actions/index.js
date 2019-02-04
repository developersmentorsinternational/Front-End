import axios from 'axios';
import {
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS
} from '../types';

const baseURL = 'https://mentors-international.herokuapp.com';

export const register = user => dispatch => {
  dispatch({
    type: REGISTER_LOADING,
    payload: true
  });
  axios.post(`${baseURL}/register`, { user }).then(res => {
    console.log(res.data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }).catch(err =>
      dispatch({
        type: REGISTER_FAILED,
        payload: err
      })
    );
  });
};

export const login = user => dispatch => {
  dispatch({
    type: LOGIN_LOADING,
    payload: true
  });
  axios
    .post(`${baseURL}/login`, user)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: LOGIN_FAILED,
        payload: err
      })
    );
};
