import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, button } from '@material-ui/core';
import econoflex from '../images/econoflex.png'
import folding from '../images/folding.png'
import mailer from '../images/mailer.png'
import shipping from '../images/shipping.png'
import inspoMailer1 from '../images/inspiration-images/inspo-mailer-box-1.jpg'
import inspoFolder1 from '../images/inspiration-images/inspo-folding-carton-1.jpg';
import inspoShipper1 from '../images/inspiration-images/inspo-shipping-box-1.jpg'
import inspoEconoflex1 from '../images/inspiration-images/inspo-econoflex-1.jpg';
import inspoMailer2 from '../images/inspiration-images/inspo-mailer-box.jpg';
import inspoFolder2 from '../images/inspiration-images/inspo-folding-carton-2.jpg';
import inspoShipper2 from '../images/inspiration-images/inspo-shipping-box-2.jpg';
import inspoEconoflex2 from '../images/inspiration-images/inspo-econoflex-2.jpg'

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

  render() {
    return (
      <>
        <div className='homepage'>
          <div className='homepage__header-section'>
            <h1 className='homepage__section-header'>Create custom packaging</h1>
            <p className='homepage__section-description'>Custom packaging can turn your brand into the total package with full customization, instant quoting, and fast turnarounds.</p>
            <button className='homepage__button'>CHOOSE YOUR STYLE</button>
            <p className='homepage__header-section__brand-header'>trusted by over 2,500 companies</p>
            <div>logos go here</div>
          </div>
          <div className='homepage__choose-style-section'>
            <h1 className='homepage__section-header background-gray'>Choose your custom box style</h1>
            <div className='homepage__choose-style-section__packages'>
              <div className='homepage__choose-style-section__package'>
                <img src={mailer} alt='custom mailer' className='homepage__choose-style-section__image' />
                <div className='homepage__choose-style-section__package-name'>Mailer Box</div>
                <div className='homepage__choose-style-section__learn-more'>Learn more</div>
                <button className='homepage__button'>Meet our mailer</button>
              </div>

              <div className='homepage__choose-style-section__package'>
                <img src={folding} alt='folding carton' className='homepage__choose-style-section__image' />
                <div className='homepage__choose-style-section__package-name'>Folding Carton</div>
                <div className='homepage__choose-style-section__learn-more'>Learn more</div>
                <button className='homepage__button'>Meet our carton</button>
              </div>

              <div className='homepage__choose-style-section__package'>
                <img src={shipping} alt='shipping box' className='homepage__choose-style-section__image' />
                <div className='homepage__choose-style-section__package-name'>Shipping Box</div>
                <div className='homepage__choose-style-section__learn-more'>Learn more</div>
                <button className='homepage__button'>Meet our shipper</button>
              </div>

              <div className='homepage__choose-style-section__package'>
                <img src={econoflex} alt='econoflex shipping box' className='homepage__choose-style-section__image' />
                <div className='homepage__choose-style-section__package-name'>Econoflex Shipping Box</div>
                <div className='homepage__choose-style-section__learn-more'>Learn more</div>
                <button className='homepage__button'>Meet econoflex shippers</button>
              </div>
            </div>
          </div>

          <div className='homepage__demo-container'>
            <h1 className='homepage__section-header'>See how to succeed with custom packaging</h1>
          </div>

          <div className='homepage__get-inspired-container'>
            <h1 className='homepage__section-header'>Get inspired</h1>
            <p className='homepage__section-description'>We’re here to help. Whether you’re designing custom gift boxes with your logo or need help with your box design, there’s lots of inspiration to be found for your custom product packaging.</p>
            <div className='homepage__get-inspired__image-container'>
              {inspoImages.map((image, i) =>(
                <div className={`inspo-${i}`}><img src={image} className='inspo-image'/></div>
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
    state
  };
};


export default connect(mapStateToProps)(HomePage);
