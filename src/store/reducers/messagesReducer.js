import { SEND_MESSAGE_LOADING, SEND_MESSAGE_SUCCESS } from '../types';

const initialState = {
  messages: [
    { id: 1, subject: 'test', body: 'this is my first test', to: 'someone' },
    {
      id: 2,
      subject: 'test',
      body: 'this is my second test',
      to: 'someone else'
    },
    { id: 3, subject: 'test', body: 'this is my third test', to: 'no one' }
  ],
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
