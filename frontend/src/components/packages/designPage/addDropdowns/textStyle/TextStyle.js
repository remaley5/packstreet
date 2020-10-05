import React, { Component } from 'react';
import AddColor from './AddColor';
import AddInput from './AddInput';
import AddFont from './AddFont'

const options = ['addText', 'addFont', 'addColor']
const titles = ['Text', 'Font', 'Font Color']


class TextStyle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addFont: null,
            addText: null,
            addColor: null,
        }
    }

    handleDropdown = (e) => {
        console.log(this.state[e.target.value])
        if ((this.state[e.target.value]) !== null) { console.log(`setting ${e.target.value} to null`);
         this.setState({ [e.target.value]: null })}
        else if (e.target.value === 'addFont') this.setState({ addFont: <AddFont />})
        else if (e.target.value === 'addText') this.setState({ addText: <AddInput />})
        else if (e.target.value === 'addColor') this.setState({ addColor: <AddColor /> })

    }


    render() {
        if (this.props.currentDropdown === 'text') {
            return (
                <>
                    <div className='design-page__option-bar-left__drop-down text'>
                        {options.map((option, i) => {
                            return (<>
                                <button key={`option${i}`} className='design-page__option-bar-left__drop-down__header' value={option} onClick={this.handleDropdown}>{titles[i]}</button>
                                <div key={`choices${i}`}>{this.state[option]}</div>
                            </>)
                        })}
                    </div>
                </>
            )
        } else return null
    }

}

export default TextStyle
