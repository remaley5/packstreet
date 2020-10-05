import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';


const PackageBases = ({packageBases, setCurrentBase}) => {
    return (
            <div className='homepage__choose-style-section'>
                <h1 className='section-header background-gray'>Choose your custom box style</h1>
                <div className='homepage__choose-style-section__packages'>
                    {packageBases.map((packageBase, i) => {
                        return (
                            <div key={`section${i}`} className='homepage__choose-style-section__package'>
                                <img src={packageBase.defaultImage} key={`packageBaseImage${i}`} alt={packageBase.name} className='homepage__choose-style-section__image' />
                                <div className='homepage__choose-style-section__package-name' key={`packageBaseName${i}`}>{packageBase.name}</div>
                                <div className='homepage__choose-style-section__learn-more' key={`packageBaseLearnMore${i}`}>Learn more</div>
                                <NavLink to='/package' key={`packageBaseLink${i}`} onClick={() => setCurrentBase(packageBase.id)} className='section-button'>{packageBase.buttonText}</NavLink>
                            </div>
                        )
                    })}
                </div>
         </div>
    )
};

export default PackageBases;
