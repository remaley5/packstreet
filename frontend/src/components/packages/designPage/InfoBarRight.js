import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCurrentDesign } from '../../../store/reducers/design';

class InfoBarRight extends Component {
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        this.props.saveCurrentDesign(this.props.userId, this.props.designState)
    }
    render() {
        return (
            <>
                <div className='design-page__info-bar-right'>
                    <div className='design-page__info-bar-right__box-name'>{}</div>
                    <div className='design-page__info-bar-right__description'>{}</div>
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
                        <button className='design-page__info-bar-right__button' onClick={this.handleClick}>Save</button>
                    </div>
                </div>
            </>
        )
    }
};

const mapStateToProps = state => {
    return {
        designState: state.design.SavedPackageDesign,
        userId: state.auth.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveCurrentDesign: (id, designState) => dispatch(saveCurrentDesign(id, designState))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoBarRight);
