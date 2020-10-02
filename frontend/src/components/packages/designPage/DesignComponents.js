import React, {Component} from 'react';

import Render from './Render';
import LeftChoices from './LeftChoices'


const DesignComponents = ({packageBase, currentDropdown}) => {

    return (
        <>
            <div className='design-page'>
                <LeftChoices />
                <Render />
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
