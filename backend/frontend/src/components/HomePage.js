import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from './Navigation'
import inspoMailer1 from '../images/inspiration-images/inspo-mailer-box-1.jpg'
import inspoFolder1 from '../images/inspiration-images/inspo-folding-carton-1.jpg';
import inspoShipper1 from '../images/inspiration-images/inspo-shipping-box-1.jpg'
import inspoEconoflex1 from '../images/inspiration-images/inspo-econoflex-1.jpg';
import inspoMailer2 from '../images/inspiration-images/inspo-mailer-box-2.jpg';
import inspoFolder2 from '../images/inspiration-images/inspo-folding-carton-2.jpg';
import { getPackageBases } from "../store/reducers/packages";
import ConnectedPackageBases from './packages/ConnectedPackageBases'

const inspoImages = [
  inspoMailer1,
  inspoFolder1,
  inspoShipper1,
  inspoEconoflex1,
  inspoMailer2,
  inspoFolder2 ]
  // inspoShipper2,
  // inspoEconoflex2 ]

  const key = 0;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getPackageBases()
  }

  render() {
    return (
      <>
        <Navigation />
        <div className='homepage'>
          <div className='homepage__header-section'>
            <h1 className='section-header'>Create custom packaging</h1>
            <p className='section-description'>Custom packaging can turn your brand into the total package with full customization, instant quoting, and fast turnarounds.</p>
            <button className='section-button'>CHOOSE YOUR STYLE</button>
            <p className='homepage__header-section__brand-header'>trusted by over 2,500 companies</p>
          </div>
          <ConnectedPackageBases />
          <div className='homepage__get-inspired-container'>
            <h1 className='section-header'>Get inspired</h1>
            <p className='section-description'>We’re here to help. Whether you’re designing custom gift boxes with your logo or need help with your box design, there’s lots of inspiration to be found for your custom product packaging.</p>
            <div className='homepage__get-inspired__image-container'>
              {inspoImages.map((image, i) =>(
                <div className={`inspo-${i}`} key={`inpo${i}`}><img src={image} className='inspo-image'/></div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    packageBases: state.packages.packageBases
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPackageBases: packageBases => dispatch(getPackageBases(packageBases))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
