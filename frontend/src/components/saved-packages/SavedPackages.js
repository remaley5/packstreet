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
      <div className='saved-packages'>
          "My packages"
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};


export default connect(mapStateToProps)(SavedPackages);
