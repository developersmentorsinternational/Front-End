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
  GET_USERS_SUCCESS,
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
  UPDATE_SCHEDULE_FAILED,
  SEND_MESSAGE_FAILED,
  GET_REGIONS_LOADING,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_FAILED,
  GET_CLIENTS_SUCCESS,
  GET_EVENTS_SUCCESS,
  GET_GROUPS_SUCCESS,
  SET_GROUP_EVENT,
  SET_GROUP_EVENT_LOADING,
  SET_GROUP_EVENT_FAILED
} from '../types';

const config = {
  headers: {
    Authorization: localStorage.token
  }
};

export const handleChange = (name, value) => ({
  type: HANDLE_CHANGES,
  payload: {
    name,
    value
  }
});

const baseURL = 'https://mentors-international.herokuapp.com';

export const register = user => dispatch => {
  dispatch({
    type: REGISTER_LOADING
  });
  axios
    .post(`${baseURL}/register`, user, config)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
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
    .post(`${baseURL}/login`, { email, password }, config)
    .then(res => {
      console.log(res);
      axios.defaults.headers.common['Authorization'] = res.data.token;
      localStorage.setItem('token', res.data.token);
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
    .get(`${baseURL}/api/logout`, config)
    .then(res => {
      localStorage.clear();
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// ---------------------------------------->
// messages reducer
// ---------------------------------------->

export const getMessages = () => dispatch => {
  dispatch({
    type: GET_MESSAGE_LOADING
  });
  axios
    .get(`${baseURL}/api/get-messages`, config)
    .then(res =>
      dispatch({
        type: GET_MESSAGE_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MESSAGE_FAILED,
        payload: err
      })
    );
};

export const getUsers = () => dispatch => {
  axios
    .get(`${baseURL}/api/user`, config)
    .then(res =>
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const sendMessage = message => dispatch => {
  dispatch({
    type: SEND_MESSAGE_LOADING
  });
  return axios
    .post(`${baseURL}`, message, config)
    .then(res => {
      console.log('%c CONSOLELOG', 'color: red', res);
      dispatch({
        type: SEND_MESSAGE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: SEND_MESSAGE_FAILED,
        payload: err
      })
    );
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
  console.log(name, value);
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
// schedule reducers CRUD section -------//
//---------------

export const getSchedule = () => dispatch => {
  dispatch({
    type: GET_SCHEDULE_LOADING
  });
  return axios.get(`${baseURL}`, config).then(res => {
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
    .post(`${baseURL}`, schedule, config)
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
    .delete(`${baseURL}/${id}`, config)
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
  type: POPULATE_SCHEDULE,
  payload: { id }
});

export const updateSchedule = (beingUpdated, schedule) => dispatch => {
  dispatch({
    type: UPDATE_SCHEDULE_LOADING
  });
  return axios
    .put(`${baseURL}/${beingUpdated}`, schedule, config)
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

// END OF CRUD SECTION

export const getRegions = () => dispatch => {
  dispatch({
    type: GET_REGIONS_LOADING
  });
  return axios
    .get(`${baseURL}/regions`, config)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_REGIONS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_REGIONS_FAILED,
        payload: err
      });
    });
};

export const getClients = () => dispatch => {
  axios
    .get(`${baseURL}/api/get-clients`, config)
    .then(res =>
      dispatch({
        type: GET_CLIENTS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getEvents = () => dispatch => {
  axios
    .get(`${baseURL}/api/get-events`)
    .then(res =>
      dispatch({
        type: GET_EVENTS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getGroups = () => dispatch => {
  axios
    .get(`${baseURL}/api/get-groups `, config)
    .then(res =>
      dispatch({
        type: GET_GROUPS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const setGroupEvent = (event, group, body) => dispatch => {
  dispatch({
    type: SET_GROUP_EVENT_LOADING
  });
  console.log(event, group, body);
  axios
    .post(
      `${baseURL}/api/set-group-event-remind`,
      { event, group, body },
      config
    )
    .then(res =>
      dispatch({
        type: SET_GROUP_EVENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: SET_GROUP_EVENT_FAILED,
        payload: err.data
      })
    );
};
