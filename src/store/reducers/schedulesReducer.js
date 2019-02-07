import { HANDLE_SCHEDULE_CHANGE } from '../types';

const initialState = {
  schedules: [],
  event: '',
  group: '',
  messageBody: 'hello',
  date: {
    minute: '',
    hour: '',
    dayOfTheMonth: '',
    month: '',
    dayOfTheWeek: ''
  }
};
// cronjob https://crontab.guru/
const schedulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SCHEDULE_CHANGE:
      return {
        ...state,
        date: { ...state.date, [action.payload.name]: action.payload.value }
      };
    default:
      return state;
  }
};

export default schedulesReducer;
