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

const initialState = {
  user: {},
  isRegisterLoading: false,
  isRegisterSuccess: false,
  isRegisterFailed: false,
  isLogginSuccess: false,
  isLoginLoading: false,
  isLoginFailed: false,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  loginEmail: '',
  loginPassword: '',
  countryCode: '1',
  message: ''
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGES:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case REGISTER_LOADING:
      return {
        ...state,
        isRegisterLoading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isRegisterLoading: false,
        isRegisterSuccess: true,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
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
    case LOGOUT_SUCESS:
      return {
        ...state,
        isLogginSuccess: false
      };
    default:
      return state;
  }
};

export default loginReducer;
