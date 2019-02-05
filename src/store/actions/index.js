import axios from 'axios';
import {
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  HANDLE_CHANGES,
  LOGOUT_SUCESS
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
      console.log(res.data);
      localStorage.setItem('data', JSON.stringify(res.data));
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: REGISTER_FAILED,
        payload: err
      })
    );
};

export const login = (loginEmail, loginPassword) => dispatch => {
  dispatch({
    type: LOGIN_LOADING
  });
  axios
    .post(`${baseURL}/login`, { email: loginEmail, password: loginPassword })
    .then(res => {
      console.log(res);
      localStorage.setItem('data', JSON.stringify(res.data));
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

export const logout = () => dispatch => {
  return axios
    .get(`${baseURL}/api/logout`)
    .then(res =>
      dispatch({
        type: LOGOUT_SUCESS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
