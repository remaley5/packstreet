import React from 'react';

import Render from './Render';
import LeftChoices from './LeftChoices'
import InfoBarRight from './InfoBarRight';


const DesignComponents = ({ currentDropdown, setCurrentDropdown, setStyle }) => {

    return (
        <>
            <div className='design-page'>
                <LeftChoices
                    setCurrentDropdown={setCurrentDropdown}
                    currentDropdown={currentDropdown}
                    setStyle={setStyle}
                />
                <Render />
                <InfoBarRight />
            </div>
        </>
    )
};

export default DesignComponents;
