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
    console.log('hello: ', this.props.isLogginSuccess);
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Navbar
          isLogginSuccess={this.props.isLogginSuccess}
          isRegisterSuccess={this.props.isRegisterSuccess}
        />
        <Route
          exact
          path='/'
          render={props => (
            <Authorization
              {...props}
              isLogginSuccess={this.props.isLogginSuccess}
              isRegisterSuccess={this.props.isRegisterSuccess}
            />
          )}
        />
      </>
    );
  }
}

const Authorization = Authorize(DashboardView)(SignupView);

const mapStateToProps = state => ({
  isLogginSuccess: state.auth.isLogginSuccess,
  isRegisterSuccess: state.auth.isRegisterSuccess
});

export default connect(
  mapStateToProps,
  {}
)(App);
