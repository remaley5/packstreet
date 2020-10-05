import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStyle } from '../../../../store/reducers/design';

const urls = [
    'https://lh3.googleusercontent.com/zPneHABG8Yg-rJz0oD2HFZ4QgujabWjUlVIhkQ-hwNuIRWz_6lUhnralpmmovtJ0iCMp6gE7KLd7kvyuXHX7CepXbdWILjHZMW30YEXZNHy_Bm14GmuNYXibmycujdyMrzbBZE0fSw',
    "https://lh3.googleusercontent.com/nS-Ve2pHMnJNk6AiYr8Sn-lNVag7LLBx1LoTx9dvTmrS36gebt7Vzqv1JbB-2uIxOqOvgICB_ufXjQULaOEO6A6ru59VPzh1tPUb30Cj0xwg24mS8M2B-P83U6EM4E9Aor0LT3aPlw=w600-h315-p-k",
    "https://lh3.googleusercontent.com/mxvmFNM8QAJkWxR36puTRcp84ar9t0E9a_wqz428AN-JY2QawNKxi7e7ny5CyACZcyHLKzZvgBn_doZnheWolApttBZO0eWdE_8iNBAy9U-rFfpoJb9ZH_4GeRwVUaJkkqXUC1vIag=w1920-h1080"
]

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
                    <div className='design-page__option-bar-left__drop-down__header'>Background Image</div>
                    <div className='image-dropdown'>
                        {urls.map((url, i) => {
                            return (
                                <button src={url} value={url} key={`url${i}`} className={`image-dropdown__option`} onClick={this.handleClick}><img className='image-choice' src={url}></img></button>
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
