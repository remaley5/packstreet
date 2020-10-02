import React from 'react';

const PackageBases = ({packageBases}) => {
    return (
            <div className='homepage__choose-style-section'>
                <h1 className='section-header background-gray'>Choose your custom box style</h1>
                <div className='homepage__choose-style-section__packages'>
                    {packageBases.map((packageBase) => {
                        return (
                            <div className='homepage__choose-style-section__package' key={packageBase.name}>
                                <img src={require(`../../../public/images/${packageBase.defaultImage}`)} alt={packageBase.name} className='homepage__choose-style-section__image' />
                                <div className='homepage__choose-style-section__package-name'>{packageBase.name}</div>
                                <div className='homepage__choose-style-section__learn-more'>Learn more</div>
                                <button className='section-button'>{packageBase.buttonText}</button>
                            </div>
                        )
                    })}
                </div>
         </div>
    )
};

export default PackageBases;
