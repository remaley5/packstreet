import React, { Component } from 'react';
const images = ['cow', 'flower', 'smoke', 'spider', 'trophy'];

const AddImages = (props) => {
    if (props.currentDropdown === 'images') {
    return (
        <>
            <div className='design-page__option-bar-left__drop-down images'>
                <div className='design-page__option-bar-left__drop-down__header'>
                    Add Images
                </div>
            </div>
            <div className='dropdown__image-choices' />
        </>
    )
    } else return null
}

export default AddImages;
