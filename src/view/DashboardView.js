import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import { connect } from 'react-redux';
import { getUsers } from '../store/actions';

class DashboardView extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    if (!localStorage.token) {
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
  { getUsers }
)(DashboardView);
