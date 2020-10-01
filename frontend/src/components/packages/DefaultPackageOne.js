import React, { Component } from "react";
import { connect } from "react-redux";
import mailerPage from '../../images/mailer-box-page.jpg'
import mailer from '../../images/mailer.png'
import inspoMailer1 from '../../images/inspiration-images/inspo-mailer-box-1.jpg'
import inspoFolder1 from '../../images/inspiration-images/inspo-folding-carton-1.jpg';
import inspoShipper1 from '../../images/inspiration-images/inspo-shipping-box-1.jpg'
import inspoEconoflex1 from '../../images/inspiration-images/inspo-econoflex-1.jpg';
import inspoMailer2 from '../../images/inspiration-images/inspo-mailer-box-2.jpg';
import inspoFolder2 from '../../images/inspiration-images/inspo-folding-carton-2.jpg';

const inspoImages = [
    inspoMailer1,
    inspoFolder1,
    inspoShipper1,
    inspoEconoflex1,
    inspoMailer2,
    inspoFolder2]

class DefaultPackageOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <div className='package-base__header'>
                    <img className='header-image' src={mailerPage} alt='mailer' />
                    <h1 className='section-header'>
                        Mailer Box
                </h1>
                    <div className='section-description'>
                        (discription1)
                        A versatile custom mailer box that's stylish, sturdy and ready to ship directly in the mail. It looks great in any color and works for retail-ready gift boxes, subscription boxes, and e-commerce packaging.
                    </div>
                    <div className='package-base__choices'>
                        <form>
                            <label for='dimensions' className='package-base__choice-title-one'>Select a size (dimensionOptions)</label>
                            <select className='package-base__choose-one' id='dimensions' name='dimensions'>
                                <option value="dimension-1">10" x 8" x 4"</option>
                                <option value="dimension2">10" x 8" x 4"</option>
                                <option value="dimension3">10" x 8" x 4"</option>
                            </select>
                            <label for='quantity' className='package-base__choice-title-two'>Quantity</label>
                            <select className='package-base__choose-two' id='quantity' name='quantity'>
                                <option value='quantity1'>250</option>
                                <option value='quantity2'>500</option>
                                <option value='quantity3'>600</option>
                            </select>
                        </form>
                        <div className='package-base__choice-title-three'>Unit price</div>
                        <div className='package-base__choose-three'>$2.66</div>
                    </div>
                    <div className='star-header'>
                        *All sizes are listed as interior dimensions in inches.
                        **The pricing may vary depending on ink coverage.
                    </div>
                    <button className='section-button'>customize now</button>
                </div>
                <div className='package-base__second-description-section'>
                    <img className='product-image' src={mailer} alt='mailer' />
                    <div className='package-base__second-description-section__text'>
                        <h1 className='section-header'>Stylish durability</h1> {/* (description2header)  */}
                        <div className='section-description'>(description2) When your product demands protection but also needs to arrive in style, our custom mailer boxes are your best choice. Mailer boxes come in E-Flute, 1/16" or B-Flute 1/8" single-wall corrugated cardboard and can happily ship between 1-30 lbs. We'll automatically select the best thickness for your box size to ensure it's extra sound and sturdy.</div>
                        <button className='section-button'>customize your packaging</button>
                    </div>
                </div>
                <div className='package-base__inspo-section'>
                    <h1 className='section-header'>Get inspired</h1>
                    <div className='section-description'>We're here to help. Whether you're designing gift boxes with your logo or need help with your custom mailer box design, there's lots of inspiration to be found for your product packaging.</div>
                    <div className='package-base__inspo-section-images'>
                        {inspoImages.map((image, i) => (
                            <div className={`inspo-${i}`}><img src={image} className='inspo-image' /></div>
                        ))}
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


export default connect(mapStateToProps)(DefaultPackageOne);
