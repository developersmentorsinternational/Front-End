import React from 'react';
import SignupForm from '../components/Signup';
import Navbar from '../components/Navbar';

const SignupView = props => {
  return (
    <div>
      <Navbar
      // isLogginSuccess={props.isLogginSuccess}
      // isRegisterSuccess={props.isRegisterSuccess}
      />
      <SignupForm />
    </div>
  );
};

export default SignupView;
