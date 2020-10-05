import React, { Component } from 'react';

class AddQuantity extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        {
            if (this.props.currentDropdown === 'quantity') {
                return (
                    <>
                        <div className='design-page__option-bar-left__drop-down quantity'>
                            <div className='design-page__option-bar-left__drop-down__header'>
                                Pick your Quantity
                </div>

                            <div className='design-page__option-bar-left__drop-down__option'>
                                4" x 4" x 2"
                </div>
                            <div className='design-page__option-bar-left__drop-down__option'>
                                4" x 4" x 2"
                </div>
                            <div className='design-page__option-bar-left__drop-down__option'>
                                4" x 4" x 2"
                </div>
                            <div className='design-page__option-bar-left__drop-down__option'>
                                4" x 4" x 2"
                </div>
                            <div className='design-page__option-bar-left__drop-down__option'>
                                4" x 4" x 2"
                </div>
                            <div className='design-page__option-bar-left__drop-down__option'>
                                4" x 4" x 2"
                </div>
                        </div>
                    </>
                )
            } else {
                return null
            }
        }
    }

}

export default AddQuantity;
