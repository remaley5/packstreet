import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStyle } from '../../../../store/reducers/design';
import image from '../../../../images/package-choices/image-choice-flower.png'
const urls = [
    "https://lh3.googleusercontent.com/yEw3VP4yosvacEF2n-e-daAYerxH9NoiG-SFS1N9M_UsG25euo3pe6Yf1NTEVuHk0LMWJr8fTIubFhCMFCNeNzRK3q8In9satCRl_1pVXYQOTAqxCIBJDBTBaZLabipkLDgOo4YPXA=w1920-h1080",
    "https://lh3.googleusercontent.com/YTa58c9VhBMX8CjuVH3XixYLhW6Eu-wSVj-lztM3swqRKW1_IBItIwrZGjqtNy3cvNM_ds-BTNAdgeu9GjeZV9V3AbJhc0Rx42e9hrix2YeV2nQRNiFm0kIWbdiLNETn7zsa88__Iw=w600-h315-p-k",
    "https://lh3.googleusercontent.com/nS-Ve2pHMnJNk6AiYr8Sn-lNVag7LLBx1LoTx9dvTmrS36gebt7Vzqv1JbB-2uIxOqOvgICB_ufXjQULaOEO6A6ru59VPzh1tPUb30Cj0xwg24mS8M2B-P83U6EM4E9Aor0LT3aPlw=w600-h315-p-k",
    "https://lh3.googleusercontent.com/mxvmFNM8QAJkWxR36puTRcp84ar9t0E9a_wqz428AN-JY2QawNKxi7e7ny5CyACZcyHLKzZvgBn_doZnheWolApttBZO0eWdE_8iNBAy9U-rFfpoJb9ZH_4GeRwVUaJkkqXUC1vIag=w1920-h1080"]

class ImageStyle extends Component {
    constructor(props) {
        super(props)
    }

    handleClick = e => {
        e.preventDefault();
        console.log('URL', e.target.value)
        this.props.setStyle('imageStyle', 'url', e.target.value, this.props.currentSide)
    }

    render() {
        if (this.props.currentDropdown === 'images') {
            return (
                <div className={`design-page__option-bar-left__drop-down`}>
                    <div className='image-dropdown'>
                        {urls.map(url => {
                            return (
                                <button src={url} value={url} className={`design-page__option-bar-left__drop-down__image-option`} onClick={this.handleClick}><img className='image-choice' src={url}></img></button>
                            )
                        })}
                    </div>
                </div>
            )
        } else return null
    }
}

const mapStateToProps = (state) => {
    return { currentSide: state.design.currentSide }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStyle: (model, attribute, key, value) => dispatch(setStyle(model, attribute, key, value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageStyle)
