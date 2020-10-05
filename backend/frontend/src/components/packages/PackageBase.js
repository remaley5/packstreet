import React from 'react';
import {NavLink} from 'react-router-dom';

const PackageBase = ({ packageBase }) => {
    return (
        <>
            <div className='package-base__header'>
                <img className='header-image' src={'https://lh3.googleusercontent.com/7T5K5My3dkOF9vFPT1lOghLR-Ee1LqVUTvdjGB902fG23N6TuzHNCKZDzlelCxKoIF5CnQQ9574Hg8VT-6h3kh-qcVj-QnUWnS4aRpTUpr1Wl2QFmPH0ypNjo9o1GOEacnDuIJcYog'} alt='mailer' />
                <h1 className='section-header'>
                    {packageBase.name}
                </h1>
                <div className='section-description'>
                    {packageBase.description1}
                </div>
            </div>
            <div className='package-base__second-description-section'>
                <img className='product-image' src={packageBase.defaultImage} alt='mailer' />
                <div className='package-base__second-description-section__text'>
                    <h1 className='section-header'>{packageBase.description2Header}</h1>
                    <div className='section-description'>{packageBase.description2}</div>
                    <NavLink to='/design' className='section-button'>customize your packaging</NavLink>
                </div>
            </div>
        </>
    )
}

export default PackageBase;
