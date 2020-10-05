import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setStyle } from '../../../../../store/reducers/design';

const colors = ['blue', 'orange', 'yellow', 'green', 'red', 'black', 'white']

class AddColor extends Component {
    constructor(props) {
        super()
    }

    handleClick = e => {
        let color = e.target.value
        if (color === 'blue') color = 'rgb(92, 118, 167)'
        if (color === 'orange') color = 'rgb(201, 164, 64)'
        if (color === 'yellow') color = 'rgb(243, 243, 188)'
        if (color === 'red') color = 'rgb(180, 81, 81)'
        if(color === 'green') color = 'rgb(62, 99, 38)';
        this.props.setStyle('textStyle', 'color', color, this.props.currentSide)
    }

    render() {
        return (
            <div className={`design-page__option-bar-left__text__dropdown `}>
                    {colors.map((color, i) => {
                        return (
                            <button value={color} key={`color${i}`} className={`design-page__option-bar-left__drop-down__option ${color}`} onClick={this.handleClick}>{color}</button>
                        )
                    })}
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

// export default AddColor;
