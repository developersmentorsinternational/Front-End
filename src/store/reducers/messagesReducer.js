import {
  SEND_MESSAGE_LOADING,
  SEND_MESSAGE_SUCCESS,
  GET_USERS_SUCCESS,
  HANDLE_MESSAGE_CHANGES,
  GET_MESSAGE_LOADING,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_FAILED,
  SEND_MESSAGE_FAILED,
  GET_CLIENTS_SUCCESS,
  GET_EVENTS_SUCCESS,
  GET_GROUPS_SUCCESS,
  SET_GROUP_EVENT_LOADING,
  SET_GROUP_EVENT_FAILED,
  HANDLE_BODY_CHANGE
} from '../types';
const initialState = {
  user: [],
  messages: [],
  event: '',
  group: '',
  body: '',
  sendMessageLoading: false,
  sendMessageSuccess: false,
  getMessageLoading: false,
  deleteScheduleLoading: false,
  error: '',
  clients: [],
  events: [],
  isLoading: false,
  isSent: true,
  messageBody: ''
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_MESSAGE_CHANGES:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case HANDLE_BODY_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case SEND_MESSAGE_LOADING:
      return {
        ...state,
        sendMessageLoading: true
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        sendMessageLoading: false,
        sendMessageSuccess: true
      };
    case SEND_MESSAGE_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case GET_MESSAGE_LOADING:
      return {
        ...state,
        getMessageLoading: true
      };
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        getMessageLoading: false
      };
    case GET_MESSAGE_FAILED:
      return {
        ...state,
        getMessageLoading: false,
        error: action.payload
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case GET_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.payload
      };
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload
      };
    case GET_GROUPS_SUCCESS:
      return {
        ...state,
        group: action.payload,
        isLoading: false,
        isSent: true,
        messageBody: ''
      };
    case SET_GROUP_EVENT_LOADING:
      return {
        ...state,
        isLoading: false
      };
    case SET_GROUP_EVENT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default messagesReducer;
