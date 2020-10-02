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
        else if (e.target.value === 'addColor') this.setState({ addColor: <AddColor /> })
    //     if (this.state.current === e.target.value) {
    //         this.setState({ [e.target.value]: null })
    //     } else {
    //         var current = e.target.value;
    //         this.setState({ current: current })
    //     }
    //     if (current === 'addFont') {
    //         this.setState({
    //             addFont: <div className={`design-page__option-bar-left__drop-down__header `}>
    //                 <div> add</div>
    //                 <div>font</div>
    //             </div>
    //         })
    //     } else {
    //         this.setState({ addFont: null })
    //     }
    //     if (this.state.current === addText) {
    //         var addText =
    //             <div className={`design-page__option-bar-left__drop-down__header `}>
    //                 <div> add</div>
    //                 <div>text</div>

    //             </div>
    //     } else {
    //         var addText = null
    //     }
    //     if (this.state.current === addColor) {
    //         addColor = <div><div>blue</div><div>green</div></div>
    //     } else {
    //         var addColor = null
    //     }
    // }

    // handleAddText = () => {
    //     this.setState = {
    //         addText: 'visible'
    //     }

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
