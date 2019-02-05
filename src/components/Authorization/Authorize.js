import React from 'react';

const Authorize = DashboardView => SignupView => props => {
  console.log(props);
  if (props.isLogginSuccess || props.isRegisterSuccess) {
    return <DashboardView />;
  }
  return <SignupView />;
};

export default Authorize;
