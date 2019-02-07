import {
  SEND_MESSAGE_LOADING,
  SEND_MESSAGE_SUCCESS,
  GET,
  HANDLE_CHANGES
} from '../types';
const initialState = {
  user: [],
  messages: [
    {
      event: '1',
      group: '1',
      messageBody: '20'
    }
  ],
  event: '',
  group: '',
  messageBody: '',
  sendMessageLoading: false,
  sendMessageSuccess: false
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGES:
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
    case GET:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default messagesReducer;
