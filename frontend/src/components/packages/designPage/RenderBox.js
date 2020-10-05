import React from 'react';
import styled from 'styled-components';

var Face = styled.div(props => `
color: ${props.textStyle.color};
font-family: ${props.textStyle.font};
font-size: ${props.textStyle.fontSize}px;
`)

const RenderBox = ({currentSide, packageFaces}) => {
    const faces = ['right', 'left', 'top', 'bottom', 'back', 'front']

    return (
        <div className="render-container">
            <div className={`cube show-${currentSide}`}>
                {faces.map((face, i) => {
                    const faceStyles = packageFaces[face];
                    return (
                        <Face textStyle={faceStyles.textStyle} key={i} className={`cube__face cube__face--${face}`}>
                            <img className='box-image' key={`imageStyle${faceStyles.imageStyle.id}`} src={faceStyles.imageStyle.url} />
                            <div className='box-text' key={`textStyle${faceStyles.textStyle.id}`}>{faceStyles.textStyle.text}</div>
                        </Face>
                    )
                })}
            </div>
        </div>
    )
}

export default RenderBox;
