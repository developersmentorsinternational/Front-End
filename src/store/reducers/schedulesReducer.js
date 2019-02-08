import {
  HANDLE_SCHEDULE_CHANGE,
  HANDLE_BODY_CHANGE,
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
  SET_GROUP_EVENT
} from '../types';

const initialState = {
  schedules: [],
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
  getScheduleLoading: false,
  deleteScheduleLoading: false,
  error: '',
  beingUpdated: null,
  isUpdating: false,
  updateScheduleLoading: false
};
// cronjob https://crontab.guru/
const schedulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUP_EVENT:
    return {
      ...state,
      schedules: action.payload
    }
    case HANDLE_SCHEDULE_CHANGE:
      return {
        ...state,
        date: { ...state.date, [action.payload.name]: action.payload.value }
      };
    case HANDLE_BODY_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case GET_SCHEDULE_LOADING:
      return {
        ...state,
        getScheduleLoading: true
      };
    case GET_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedules: action.payload,
        getScheduleLoading: false
      };
    case GET_MSCHEDULE_FAILED:
      return {
        ...state,
        error: action.payload,
        getScheduleLoading: false
      };
    case ADD_SCHEDULE_LOADING:
      return {
        ...state,
        addScheduleLoading: true
      };
    case ADD_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedules: action.payload,
        addScheduleLoading: false
      };
    case ADD_SCHEDULE_FAILED:
      return {
        ...state,
        error: action.payload,
        addScheduleLoading: false
      };
    case DELETE_SCHEDULE_LOADING:
      return {
        ...state,
        deleteScheduleLoading: true
      };
    case DELETE_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedules: action.payload,
        deleteScheduleLoading: false
      };
    case DELETE_SCHEDULE_FAILED:
      return {
        ...state,
        error: action.payload,
        deleteScheduleLoading: false
      };
    case POPULATE_SCHEDULE:
      let selected = state.schedules.find(
        schedule => schedule.id === action.payload
      );
      return {
        ...state,
        event: selected.event,
        group: selected.group,
        messageBody: selected.messageBody,
        date: {
          minute: selected.date.minute,
          hour: selected.date.hour,
          dayOfTheMonth: selected.date.dayOfTheMonth,
          month: selected.date.month,
          dayOfTheWeek: selected.date.dayOfTheWeek
        },
        beingUpdated: selected.id,
        isUpdating: true
      };
    case UPDATE_SCHEDULE_LOADING:
      return {
        ...state,
        updateScheduleLoading: true
      };
    case UPDATE_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedules: action.payload,
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
        updateScheduleLoading: false
      };
    case UPDATE_SCHEDULE_FAILED:
      return {
        ...state,
        error: action.payload,
        updateScheduleLoading: false
      };
    default:
      return state;
  }
};

export default schedulesReducer;

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
