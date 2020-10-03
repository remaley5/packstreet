import React, { Component } from 'react';
import AddColor from './AddColor';

const options = ['addText', 'addFont', 'addColor']

class AddText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addFont: null,
            addText: null,
            addColor: null,
            current: null
        }
    }

    handleDropdown = (e) => {
        console.log(this.state[e.target.value])
        if ((this.state[e.target.value]) !== null) { console.log(`setting ${e.target.value} to null`);
         this.setState({ [e.target.value]: null })}
        else if (e.target.value === 'addFont') this.setState({ addFont: <>AddFont </> })
        else if (e.target.value === 'addText') this.setState({ addText: <>add text</>})
        else if (e.target.value === 'addColor') this.setState({ addColor: <AddColor setStyle={this.props.setStyle} currentSide={this.props.currentSide}/> })

    }


    render() {
        if (this.props.currentDropdown === 'text') {
            return (
                <>
                    <div className='design-page__option-bar-left__drop-down text'>
                        {options.map(option => {
                            return (<>
                                <button className='design-page__option-bar-left__drop-down__header' value={option} onClick={this.handleDropdown}>{option}</button>
                                {this.state[option]}
                            </>)
                        })}
                    </div>
                </>
            )
        } else return null
    }

}

export default AddText
