import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setStyle } from '../../../../store/reducers/design';

const colors = ['blue', 'orange', 'yellow', 'green', 'red', 'black', 'white']
class AddColor extends Component {
    constructor(props) {
        super()
    }

    handleClick = e => {
        this.props.setStyle('TextStyle', 'color', e.target.value, this.props.currentSide)
    }

    render() {
        return (
            <div className={`design-page__option-bar-left__text__dropdown `}>
                <ul>
                    {colors.map(color => {
                        return (
                            <li><button value={color} className={color} onClick={this.handleClick}>{color}</button></li>
                        )
                    })}
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddColor)
