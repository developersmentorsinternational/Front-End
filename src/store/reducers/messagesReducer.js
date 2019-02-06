import { SEND_MESSAGE_LOADING, SEND_MESSAGE_SUCCESS } from '../types';

const initialState = {
  messages: [],
  sendMessageLoading: false,
  sendMessageSuccess: false
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default messagesReducer;
