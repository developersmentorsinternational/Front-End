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
  HANDLE_SCHEDULE_CHANGE,
  HANDLE_BODY_CHANGE,
  HANDLE_MESSAGE_CHANGES,
  GET_MESSAGE_LOADING,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_FAILED,
  GET_SCHEDULE_LOADING,
  GET_SCHEDULE_SUCCESS,
  GET_MSCHEDULE_FAILED,
  ADD_SCHEDULE_LOADING,
  ADD_SCHEDULE_SUCCESS,
  ADD_SCHEDULE_FAILED,
  DELETE_SCHEDULE_LOADING,
  DELETE_SCHEDULE_SUCCESS,
  DELETE_SCHEDULE_FAILED,
  POPULATE_SCHEDULE,
  UPDATE_SCHEDULE_LOADING,
  UPDATE_SCHEDULE_SUCCESS,
  UPDATE_SCHEDULE_FAILED
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

export const getMessage = () => dispatch => {
  dispatch({
    type: GET_MESSAGE_LOADING
  });
  return axios.get(`${baseURL}`).then(res => {
    console.log(res);
    dispatch({
      type: GET_MESSAGE_SUCCESS,
      payload: res.data
    }).catch(err =>
      dispatch({
        type: GET_MESSAGE_FAILED,
        payload: err
      })
    );
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

export const handleBodyChange = (name, value) => {
  return {
    type: HANDLE_BODY_CHANGE,
    payload: {
      name,
      value
    }
  };
};

export const handleMessageChange = (name, value) => ({
  type: HANDLE_MESSAGE_CHANGES,
  payload: name,
  value
});

//------------
// schedule reducers
//---------------

export const getSchedule = () => dispatch => {
  dispatch({
    type: GET_SCHEDULE_LOADING
  });
  return axios.get(`${baseURL}`).then(res => {
    console.log(res);
    dispatch({
      type: GET_SCHEDULE_SUCCESS,
      payload: res.data
    }).catch(err =>
      dispatch({
        type: GET_MSCHEDULE_FAILED,
        payload: err
      })
    );
  });
};

export const addSchedule = schedule => dispatch => {
  dispatch({
    type: ADD_SCHEDULE_LOADING
  });
  return axios
    .post(`${baseURL}`, schedule)
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_SCHEDULE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: ADD_SCHEDULE_FAILED,
        payload: err
      })
    );
};

export const deleteSchedule = id => dispatch => {
  dispatch({
    type: DELETE_SCHEDULE_LOADING
  });
  return axios
    .delete(`${baseURL}/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SCHEDULE_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: DELETE_SCHEDULE_FAILED,
        payload: err
      })
    );
};

export const populateSchedule = id => ({
  type: POPULATE_SCHEDULE
});

export const updateSchedule = (beingUpdated, schedule) => dispatch => {
  dispatch({
    type: UPDATE_SCHEDULE_LOADING
  });
  return axios
    .put(`${baseURL}/${beingUpdated}`, schedule)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: UPDATE_SCHEDULE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: UPDATE_SCHEDULE_FAILED,
        payload: err
      })
    );
};
/*
object {
  event: '',
  group: '',
  messageBody: '',
  date: {
    minute: '',
    hour: '',
    dayOfTheMonth: '',
    month: '',
    dayOfTheWeek: ''
  },
}
*/
