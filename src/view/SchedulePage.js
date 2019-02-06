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
      <ScheduledForm />
      <ScheduledList />
      <ScheduledCard />
    </div>
  );
};

export default SchedulePage;
