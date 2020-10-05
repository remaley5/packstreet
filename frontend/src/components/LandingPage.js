import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from './session/LoginForm';
import SignupForm from "./session/SignupForm";
import Navigation from "./Navigation";


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <main className='landing-page'>
        <div className='landing-page__container'>
          <LoginForm className='landing-page__form-container' />
          <SignupForm className='landing-page__form-container' />
        </div>
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
