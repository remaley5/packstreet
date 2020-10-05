import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveCurrentDesign } from '../../../store/reducers/design';

const categories = ['Size', 'Material', 'Quantity', 'Unit price', 'Subtotal']
const values = ['10" x 10" x 10"', '250', '$2.66', '$655.00']

class InfoBarRight extends Component {
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        this.props.saveCurrentDesign(this.props.userId, this.props.designState);

    }
    render() {
        return (
            <>
                <div className='design-page__info-bar-right'>
                    <div className='design-page__info-bar-right__box-name'>Shipper</div>
                    <div className='design-page__info-bar-right__description'>Perfect for beauty packaging, supplements, and chocolate.</div>
                        <table className='design-page__info-bar-right__info'>
                            <tbody>
                            {
                                    categories.map((category, i) => {
                                        return (
                                            <tr>
                                                <th className='info-bar-right__category' key={`category${i}`}>{category}</th>
                                                <td className='info-bar-right__value' key={`values${i}`}>{values[i]}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <NavLink to='/my-packages' className='design-page__info-bar-right__button' onClick={this.handleClick}>Save</NavLink>
                </div>
            </>
        )
    }
};

const mapStateToProps = state => {
    return {
        designState: state.design.savedPackageDesign,
        userId: state.auth.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveCurrentDesign: (id, designState) => dispatch(saveCurrentDesign(id, designState))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoBarRight);
