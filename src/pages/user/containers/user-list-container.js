import React from 'react';
import { connect } from 'react-redux';
import UserList from '../views/user-list';
import * as userApi from '@services/user-api';
import store from '@store/store';
import { loadSearchLayout } from '@store/actions/search-layout-actions';
import ErrorBoundary from '@components/errorBoundary/error-boundary';

class UserListContainer extends React.Component {

  componentDidMount() {
    userApi.getUsers();
    store.dispatch(loadSearchLayout('users', 'User Results'));
  }

  render() {
    return (
      <ErrorBoundary>
        <UserList users={this.props.users} deleteUser={userApi.deleteUser} />
      </ErrorBoundary>
    );
  }

};

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(UserListContainer);
