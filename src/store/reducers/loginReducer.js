import {
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS
} from '../types';

const initialState = {
  user: {},
  isRegisterLoading: false,
  isRegisterSuccess: false,
  isRegisterFailed: false,
  isLogginSuccess: false,
  isLoginLoading: false,
  isLoginFailed: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        isRegisterLoading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegisterLoading: false,
        isRegisterSuccess: true
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isRegisterLoading: false,
        isRegisterFailed: true
      };
    case LOGIN_LOADING:
      return {
        ...state,
        isLoginLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginLoading: false,
        isLogginSuccess: true
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoginLoading: false,
        isLoginFailed: true
      };
    default:
      return state;
  }
};

export default loginReducer;
