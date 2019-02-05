import React from 'react';

const Authorize = DashboardView => SignupView => props => {
  console.log(props);
  if (props.isLogginSuccess || props.isRegisterSuccess) {
    return props.history.push('/dashboard');
  }
  return props.history.push('/signup');
};

export default Authorize;
