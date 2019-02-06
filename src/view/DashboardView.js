import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import { connect } from 'react-redux';

const DashboardView = props => {
  if (!props.isLogginSuccess) {
    props.history.push('/signup');
  }
  return (
    <div>
      <Dashboard {...props} />
      
    </div>
  );
};
const mapStateToProps = state => ({
  isRegisterSuccess: state.auth.isRegisterSuccess,
  isLogginSuccess: state.auth.isLogginSuccess
});
export default connect(mapStateToProps)(DashboardView);
