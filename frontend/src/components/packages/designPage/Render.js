import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentSide } from '../../../store/reducers/design';

const sides = ['right', 'left', 'front', 'back', 'top', 'bottom']

class Render extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 'front',
            dropdown: 'hide',
        }
    }

    changeSide = (e) => {
        this.props.setCurrentSide(e.target.value);
    }

    render() {
        return (
            <>
                <div className='design-page__box-rendering-container'>
                    <div className='design-page__box-rendering-container__select-side'>
                        <div className="render-container">
                            <div className={`cube show-${this.props.currentSide}`}>
                                {sides.map(side => {
                                    return (
                                        <div className={`cube__face cube__face--${side}`}></div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='design-page__box-rendering-container__select-side__label'>
                            Select side
                    </div>

                        <div className="button-group" >
                            {sides.map(side => {
                                return (
                                    <button type="button" name="rotate-cube-side" value={side} onClick={this.changeSide} >{side}</button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { currentSide: state.design.currentSide }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentSide: (side) => dispatch(setCurrentSide(side))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Render);
