import {
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  HANDLE_CHANGES,
  LOGOUT_SUCCESS,
  GET_REGIONS_LOADING,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_FAILED
} from '../types';

const initialState = {
  user: {},
  regions: [],

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
  region: '',
  message: '',
  error: ''
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
        user: action.payload,
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
        isLogginSuccess: true,
        loginEmail: '',
        loginPassword: '',
        user: action.payload
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoginLoading: false,
        isLoginFailed: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogginSuccess: false,
        isRegisterSuccess: false
      };
    case GET_REGIONS_LOADING:
      return {
        ...state,
        getRegionsLoading: true
      };
    case GET_REGIONS_SUCCESS:
      return {
        ...state,
        regions: action.payload,
        getRegionsLoading: false
      };
    case GET_REGIONS_FAILED:
      return {
        ...state,
        etRegionsLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
