import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import messagesReducer from './messagesReducer';
import schedulesReducer from './schedulesReducer';

const rootReducer = combineReducers({
  auth: loginReducer,
  messages: messagesReducer,
  schedules: schedulesReducer
});

export default rootReducer;
