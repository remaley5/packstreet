import React from 'react';

import DesignRenderDropDown from './DesignRenderDropdown';

const DesignComponents = ({ packageBase }) => {
    // console.log('packageBase in component', packageBase)
    // console.log('packagebaseImage', `image/${packageBase.defaultImage}`)

    // console.log('packagebase in compoonent dimensions', packageBase.widthOptions);

    return (
        <>
            <div className='design-page'>
                <div className='design-page__option-bar-left'>
                    <div className='design-page__option-bar-left__option'></div>
                    <div className='design-page__option-bar-left__option'></div>
                    <div className='design-page__option-bar-left__option'></div>
                    <div className='design-page__option-bar-left__option'></div>
                    <div className='design-page__option-bar-left__option'></div>
                </div>
                <div className='design-page__option-bar-left__drop-down'>
                    <div className='design-page__option-bar-left__drop-down__header'>
                        Select stock size
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
                <DesignRenderDropDown />
                <div className='design-page__info-bar-right'>
                    <div className='design-page__info-bar-right__box-name'>{packageBase.name}</div>
                    <div className='design-page__info-bar-right__description'>{packageBase.description1}</div>
                    <div className='design-page__info-bar-right__info'>
                        <table>
                            <tbody>
                            <tr>
                                <th className='design-page__info-bar-right__info title'>Size</th>
                                <td className='design-page__info-bar-right__info__value'>10" x 8" x 4"</td>
                            </tr>
                            <tr>
                                <th className='design-page__info-bar-right__info title'>Material</th>
                                <td className='design-page__info-bar-right__info__value'>White</td>
                            </tr>
                            <tr>
                                <th className='design-page__info-bar-right__info title'>Quantity</th>
                                <td className='design-page__info-bar-right__info__value'>250</td>
                            </tr>
                            <tr>
                                <th className='design-page__info-bar-right__info title'>Unit price</th>
                                <td className='design-page__info-bar-right__info__value'>$2.66</td>
                            </tr>
                            <tr>
                                <th className='design-page__info-bar-right__info title subtotal'>Subtotal</th>
                                <td className='design-page__info-bar-right__info__value'>$655.00</td>
                            </tr>
                            </tbody>
                        </table>
                        <button className='design-page__info-bar-right__button'>Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DesignComponents;
