import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";


class SavedPackages extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
          <div>Your saved packages</div>
        </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};


export default connect(mapStateToProps)(SavedPackages);
