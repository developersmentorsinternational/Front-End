import React from 'react';

const Authorize = DashboardView => SignupView => props => {
  console.log(props);
  if (props.isLoggedIn) {
    return <DashboardView />;
  }
  return <SignupView />;
};

export default Authorize;
