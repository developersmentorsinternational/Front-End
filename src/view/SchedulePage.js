import React from 'react';
import {
  ScheduledList,
  ScheduledCard,
  ScheduledForm
} from '../components/SchedulePage';
import { Route } from 'react-router-dom';

const SchedulePage = () => {
  return (
    <div>
      <Route path='/dashboard/schedule/add-form' component={ScheduledForm} />
      <Route Path='/dashboard/schedule/' component={ScheduledList} />
      <Route path='/dashboard/schedule/:id' component={ScheduledCard} />
    </div>
  );
};

export default SchedulePage;
