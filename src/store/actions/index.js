import axios from 'axios';
import {
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  HANDLE_CHANGES,
  LOGOUT_SUCCESS,
  SEND_MESSAGE_LOADING,
  SEND_MESSAGE_SUCCESS,
  GET,
  HANDLE_SCHEDULE_CHANGE
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
      console.log(res);
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

// ---------------------------------------->
// messages reducer
// ---------------------------------------->

export const sendMessage = message => dispatch => {
  dispatch({
    type: SEND_MESSAGE_LOADING
  });
  return axios.post(res => {
    dispatch({
      type: SEND_MESSAGE_SUCCESS,
      payload: message
    });
  });
};

export const getUsers = () => dispatch => {
  axios
    .get(`${baseURL}/api/user`)
    .then(res =>
      dispatch({
        type: GET,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const handleScheduleChange = (name, value) => {
  console.log(name, value);
  return {
    type: HANDLE_SCHEDULE_CHANGE,
    payload: {
      name,
      value
    }
  };
};
