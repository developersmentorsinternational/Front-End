import axios from 'axios';
import {
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  HANDLE_CHANGES,
  LOGOUT_SUCCESS
} from '../types';

export const handleChange = (name, value) => ({
  type: HANDLE_CHANGES,
  payload: {
    name,
    value
  }
});

const baseURL = 'https://mentors-international.herokuapp.com';

export const register = (
  email,
  firstName,
  lastName,
  password,
  phoneNumber
) => dispatch => {
  dispatch({
    type: REGISTER_LOADING
  });
  return axios
    .post(`${baseURL}/register`, {
      email,
      firstName,
      lastName,
      password,
      countryCode: '1',
      phoneNumber
    })
    .then(res => {
      console.log(res);
      localStorage.setItem('data', JSON.stringify(res.data));
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: REGISTER_FAILED,
        payload: err
      });
    });
};

export const login = (email, password) => dispatch => {
  dispatch({
    type: LOGIN_LOADING
  });
  axios
    .post(`${baseURL}/login`, { email, password })
    .then(res => {
      console.log(res.data.message);
      localStorage.setItem('data', JSON.stringify(res.data));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.message
      });
    })
    .catch(err =>
      dispatch({
        type: LOGIN_FAILED,
        payload: err
      })
    );
};

export const logout = () => dispatch => {
  return axios
    .get(`${baseURL}/api/logout`)
    .then(res =>
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
