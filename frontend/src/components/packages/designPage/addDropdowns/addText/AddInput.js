import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setStyle } from '../../../../../store/reducers/design';

class AddInput extends Component {
    constructor (props) {
        super(props)
        this.state = {
            textValue: ''
        }
    }

    handleClick = e => {
        console.log('SETTING STYLE', this.state.textValue)
        this.props.setStyle('textStyle', 'text', this.state.textValue, this.props.currentSide)
    }

    handleChange = e => {
        e.preventDefault();
       this.setState({textValue: e.target.value})
       console.log(this.state.textValue);
    }

    render() {
        return (
            <form>
            <input type='text' placeholder='what do you want to say?' onChange={this.handleChange}/>
            <button type='button' onClick={this.handleClick}>Submit</button>
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddInput)

// export default AddInput;
