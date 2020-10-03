import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { setCurrentDropdown } from '../../../store/reducers/design';
import AddText from './addDropdowns/addText/AddText';
import AddQuantity from './addDropdowns/AddQuantity';
import AddImages from './addDropdowns/AddImages';

const options = ['text', 'images', 'quantity'];

class LeftChoices extends Component {
    constructor(props) {
        super(props)
        this.setState = {
        }
    }

    changeDropdown = (e) => {
        this.props.setCurrentDropdown(e.target.value)
    }

    handleReset = () => {
        console.log('resetting')
    }

    render() {
        return (
            <>
                <div className='design-page__option-bar-left'>
                    <div className="options" >
                        {options.map(option => {
                            return (
                                <button type="button" name={option} className='design-page__option-bar-left__option' value={option} onClick={this.changeDropdown} >{option}</button>
                            )
                        })}
                        <button type='button' name='reset' className='design-page__option-bar-left__option' onClick={this.handleReset}>reset</button>
                    </div>
                </div>
                <AddText setStyle={this.props.setStyle} currentDropdown={this.props.currentDropdown}/>
                <AddQuantity setStyle={this.props.setStyle} currentDropdown={this.props.currentDropdown}/>
                <AddImages setStyle={this.props.setStyle} currentDropdown={this.props.currentDropdown}/>
            </>
        )
    }
}

export default LeftChoices;

// const mapStateToProps = (state) => {
//     return { currentDropdown: state.design.currentDropdown }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setCurrentDropdown: (option) => dispatch(setCurrentDropdown(option))
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LeftChoices);
