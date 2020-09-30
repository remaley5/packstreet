import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../../store/reducers/authentication';
import Button from '@material-ui/core/Button';

function LogoutButton({ loggedOut, logout }) {
  if (loggedOut) {
    return <Redirect to="/login" />
  }
  return (
      <Button onClick={logout}>Logout</Button>
  );
}

const mapStateToProps = state => {
  return {
    loggedOut: !state.auth.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
