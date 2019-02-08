import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import { connect } from 'react-redux';
import {
  getUsers,
  getMessages,
 
  getGroups,
  getEvents
} from '../store/actions';

class DashboardView extends React.Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getMessages();
    this.props.getGroups();
    this.props.getEvents();
  }
  render() {
    if (!window.localStorage.token) {
      this.props.history.push('/signup');
    }
    return (
      <div>
        <Dashboard {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isRegisterSuccess: state.auth.isRegisterSuccess,
  isLogginSuccess: state.auth.isLogginSuccess
});
export default connect(
  mapStateToProps,
  { getUsers, getMessages, getGroups, getEvents }
)(DashboardView);
