import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStyle } from '../../../../../store/reducers/design';

const fonts = ['Times New Roman', 'Luminari', 'Courier New', 'Trattatello', 'Comic Sans MS', 'Arial Black']

class AddFont extends Component {
    constructor(props) {
        super()
    }

    handleFontClick = e => {
        let font = e.target.value
        this.props.setStyle('textStyle', 'font', font, this.props.currentSide)
    }

    handleSizeClick = e => {
        this.props.setStyle('textStyle', 'fontSize', e.target.value, this.props.currentSide)
    }

    render() {
        return (
            <div className={`design-page__option-bar-left__text__dropdown `}>
                <div className='design-page__option-bar-left__drop-down__option size-button-container'>
                    <button value='40' className='size-button big' onClick={this.handleSizeClick}>Big</button>
                    <button value='25' className='size-button medium' onClick={this.handleSizeClick}>Medium</button>
                    <button value='12' className='size-button small' onClick={this.handleSizeClick}>Small</button>
                </div>
                <div>
                    {fonts.map((font, i)=> {
                        return (
                            <button value={font} key={`font${i}`}  className={`design-page__option-bar-left__drop-down__option`} style={{ fontFamily: `${font}` }} onClick={this.handleFontClick}>{font}</button>
                        )
                    })}
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(AddFont)
