import React, { Component } from "react";
import LogoutButton from "./session/LogoutButton";
import { connect } from "react-redux";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <main>
        <LogoutButton />
        <div>You're logged in!</div>
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
