import React from 'react';
import './App.css';
import SignupView from './view/SignupView';
import Authorize from './components/Authorization/Authorize';
import DashboardView from './view/DashboardView';

class App extends React.Component {
  state = {
    isLoggedIn: false
  };
  render() {
    return (
      <>
        <Authorization isLoggedIn={this.state.isLoggedIn} />
      </>
    );
  }
}

const Authorization = Authorize(DashboardView)(SignupView);

export default App;
