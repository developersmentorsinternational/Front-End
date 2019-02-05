import React from 'react';
import SignupForm from '../components/Signup';
import Navbar from '../components/Navbar';

const SignupView = props => {
  console.log('signup view rendering');
  if (localStorage.getItem('data')) {
    props.history.push('/dashboard');
  }
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
