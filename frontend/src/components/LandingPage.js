import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from './session/LoginForm';
import SignupForm from "./session/SignupForm";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <main>
        <LoginForm />
        <SignupForm />
        <div id='logged-out-message'>You're logged out!</div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};


export default connect(mapStateToProps)(HomePage);
