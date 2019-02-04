import React from 'react';
import './App.css';
import SignupView from './view/SignupView';
import Authorize from './components/Authorization/Authorize';
import DashboardView from './view/DashboardView';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';

class App extends React.Component {
  componentDidMount() {
    console.log('hello: ', this.props.isLoggedIn);
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Navbar isLoggedIn={this.props.isLoggedIn} />
        <Route
          exact
          path='/'
          render={props => (
            <Authorization {...props} isLoggedIn={this.props.isLoggedIn} />
          )}
        />
      </>
    );
  }
}

const Authorization = Authorize(DashboardView)(SignupView);

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(
  mapStateToProps,
  {}
)(App);
