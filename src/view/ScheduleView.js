import React from 'react';
import {
  ScheduledList,
  ScheduledCard,
  ScheduledForm,
  TopContent
} from '../components/SchedulePage';
import { Route } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const ScheduleView = () => {
  return (
    <div>
      <Typography variant='h5' component='h1'>
        Add a Scheduled Message
      </Typography>
      {/* <TopContent /> */}
      <ScheduledForm />
      {/* <Route path='/dashboard/schedule/add-form' component={ScheduledForm} /> */}
      {/* <Route exact Path='/dashboard/schedule/home' component={ScheduledList} /> */}
      {/* <Route path='/dashboard/schedule/:id' component={ScheduledCard} /> */}
    </div>
  );
};

export default ScheduleView;
