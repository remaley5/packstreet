import React, { Component } from "react";
import { connect } from "react-redux";

class DefaultPackageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='default-package'>
        <div className='default-package-page__header-container'>
           <h1 className='default-package-page__header-section__blue-header'>Create custom packaging</h1>
            <p className='default-package-page__header-section__description'>Custom packaging can turn your brand into the total package with full customization, instant quoting, and fast turnarounds.</p>
            <button className='default-package-page__header-section__button'>CHOOSE YOUR STYLE</button>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};


export default connect(mapStateToProps)(DefaultPackageOne);
