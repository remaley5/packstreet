import React from 'react';
import styled from 'styled-components';

var Face = styled.div(props => `
color: ${props.textStyle.color};
font-family: ${props.textStyle.fontFamily};
font-size: ${props.textStyle.fontSize}px;
`)

const RenderBoxes = ({ currentface, design }) => {

//     const faces = design.PackageFaces;
    const faces = ['front', 'back', 'right', 'left', 'top', 'bottom']
    console.log('DESIGN', design)

    return (
        <div className="show-container">
            <div className='cube show-show'>
            {design.PackageFaces.map((faceStyles, i) => {
                    return (
                        <Face textStyle={faceStyles.TextStyle} key={`saved${i}`} className={`cube__face saved-cube-${faces[i]} cube__face--${faces[i]}`}>
                            <img className='box-image' key={`imageStyle${i}`} src={faceStyles.ImageStyle.url} />
                            <div className='box-text' key={`textStyle${i}`}>{faceStyles.TextStyle.text}</div>
                        </Face>
                    )
                })}
                <div className='cube-face cube-shadow'></div>
            </div>
        </div>
    )
}

export default RenderBoxes;
