import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/reducers/authentication';
import { FormControl, Button, TextField } from '@material-ui/core';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "sophie@email.com",
      password: "sophie",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmail = this.updateValue("email");
    this.updatePassword = this.updateValue("password");
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  updateValue = (name) => (e) => {
    this.setState({ [name]: e.target.value });
  };

  render() {
    if (this.props.currentUserId) {
      return <Redirect to="/" />
    }
    return (
      <main className="login-form">
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="text"
            placeholder="enter your email"
            value={this.state.email}
            onChange={this.updateEmail}
          />
          <TextField
            type="password"
            placeholder="enter your password"
            value={this.state.password}
            onChange={this.updatePassword}
          />
          <Button type="submit">Login</Button>
        </form>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.auth.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
