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
        <h1 className='landing-page__header'>Welcome to Packstreet</h1>
        <div className='hidden'>You're signed up!</div>
        <div className='landing-page__container'>
          <LoginForm className='landing-page__form-container' />
          <SignupForm className='landing-page__form-container signup-form' />
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
