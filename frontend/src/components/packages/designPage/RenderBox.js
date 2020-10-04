import React from 'react';
import styled from 'styled-components';


const RenderBox = ({currentSide, packageFaces}) => {
    const faces = ['right', 'left', 'top', 'bottom', 'back', 'front']

    var Face = styled.div(props => `
    color: ${props.textStyle.color};
    font-family: ${props.textStyle.font};
    font-size: ${props.textStyle.fontSize}px;
`)

    return (
        <div className="render-container">
            <div className={`cube show-${currentSide}`}>
                {faces.map((face, i) => {
                    const faceStyles = packageFaces[face];
                    return (
                        <Face textStyle={faceStyles.textStyle} className={`cube__face cube__face--${face}`}>
                            <img className='box-image' src={faceStyles.imageStyle.url} />
                            <div className='box-text'>{faceStyles.textStyle.text}</div>
                        </Face>
                    )
                })}
            </div>
        </div>
    )
}

export default RenderBox;
