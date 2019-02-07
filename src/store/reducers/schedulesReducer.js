import { HANDLE_CHANGES } from '../types';

const initialState = {
  schedules: [
    {
      event: '',
      group: '',
      messageBody: 'hello',
      date: {
        minute: 5,
        hour: 4,
        dayOfTheMonth: '*',
        month: '*',
        dayOfTheWeek: '*'
      }
    }
  ],
  event: '',
  group: '',
  messageBody: 'hello',
  date: {
    minute: 5,
    hour: 4,
    dayOfTheMonth: '*',
    month: '*',
    dayOfTheWeek: '*'
  }
};
// cronjob https://crontab.guru/
const schedulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGES:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
};

export default schedulesReducer;
