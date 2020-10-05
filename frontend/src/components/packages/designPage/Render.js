import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentSide } from '../../../store/reducers/design';
import RenderBox from './RenderBox';


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
                    <div className="button-group" >
                        {sides.map(side => {
                            return (
                                <button type="button" key={`button${side}`} name="rotate-cube-side" className='box-render__button' value={side} onClick={this.changeSide} >{side}</button>
                            )
                        })}
                    </div>
                    <div className='design-page__box-rendering-container__box'>
                        <RenderBox currentSide={this.props.currentSide} packageFaces={this.props.designState.savedPackageDesign.packageFaces} />
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentSide: state.design.currentSide,
        designState: state.design
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentSide: (side) => dispatch(setCurrentSide(side))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Render);
