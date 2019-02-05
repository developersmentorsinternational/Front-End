import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';

const DashboardView = props => {
  if (!localStorage.getItem('data')) {
    props.history.push('/signup');
  }
  return (
    <div>
      <Dashboard {...props} />
    </div>
  );
};

export default DashboardView;
