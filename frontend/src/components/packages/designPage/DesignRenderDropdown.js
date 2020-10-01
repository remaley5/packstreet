import React, {Component} from 'react';
import DesignRender from './DesignRender';

class DesignRenderDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: 'hide',
            display: 'front'
        }
    }

    render() {
        return (
            <div className='design-page__box-rendering-container'>
            <div className='design-page__box-rendering-container__select-side'>
                <div className='design-page__box-rendering-container__select-side__dropdown'>
                    <button className='dropdown-button' type='button'></button>
                </div>
            </div>
            <DesignRender />
        </div>
        )
    }
}

export default DesignRenderDropdown;
