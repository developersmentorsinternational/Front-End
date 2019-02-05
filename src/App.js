import React from 'react';
import './App.css';
import SignupView from './view/SignupView';
import Authorize from './components/Authorization/Authorize';
import DashboardView from './view/DashboardView';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    console.log('hello: ', this.props.isLogginSuccess);
    if (localStorage.getItem('data')) {
      this.props.history.push('/dashboard');
    }
  }
  render() {
    console.log(this.props);

    return (
      <>
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
        <Route path='/dashboard' component={DashboardView} />
        <Route path='/signup' component={SignupView} />
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
