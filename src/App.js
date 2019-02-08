import React from 'react';
import './App.css';
import SignupView from './view/SignupView';
import DashboardView from './view/DashboardView';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers } from './store/actions';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

class App extends React.Component {
  componentDidMount() {
    if (this.props.isLogginSuccess) {
      this.props.history.push('/dashboard');
    } else {
      this.props.history.push('/signup');
    }
  }
  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Route path='/dashboard' component={DashboardView} />
        <Route path='/signup' component={SignupView} />
      </MuiPickersUtilsProvider>
    );
  }
}

const mapStateToProps = state => ({
  isLogginSuccess: state.auth.isLogginSuccess,
  isRegisterSuccess: state.auth.isRegisterSuccess
});

export default connect(
  mapStateToProps,
  { getUsers }
)(App);
