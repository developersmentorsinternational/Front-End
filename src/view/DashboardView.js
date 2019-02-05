import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';

class DashboardView extends React.Component {
  render() {
    if (!localStorage.getItem('data')) {
      this.props.history.push('/signup');
    }
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default DashboardView;
