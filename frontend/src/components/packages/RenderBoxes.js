import React from 'react';
import styled from 'styled-components';
import image from '../../images/package-choices/image-choice-spider.png';


const RenderBoxes = ({ currentSide, design }) => {

    const faces = design.PackageFaces;
    // console.log('dsign', design);
    // console.log('packageFaces', design.PackageFaces);
    // debugger;
    // console.log('face1', design.PackageFaces[0]);
    // console.log(faces[1]);
    // debugger;
    const front = faces[0];
    console.log('FRONT', front)
    const back = faces[1];
    const right = faces[2];
    const left = faces[3];
    const top = faces[4];
    const bottom = faces[5];

    var Right = styled.div`
    color: ${right.TextStyle.color};
    font-size: ${right.TextStyle.fontSize};
    font-family: ${right.TextStyle.fontFamily};
`
    var Left = styled.div`
    color: ${left.TextStyle.color};
    font-size: ${left.TextStyle.fontSize}px;
    font-family: ${left.TextStyle.fontFamily};
`
    var Front = styled.div`
    color: ${front.TextStyle.color}
    font-size: ${front.TextStyle.fontSize}px;
    font-family: ${front.TextStyle.fontFamily};
`
    var Back = styled.div`
    color: ${back.TextStyle.color}
    font-size: ${front.TextStyle.fontSize}px;
    font-family: ${front.TextStyle.fontFamily};
`
    var Top = styled.div`
    color: ${top.TextStyle.color}
    font-size: ${front.TextStyle.fontSize}px;
    font-family: ${front.TextStyle.fontFamily};
`
    var Bottom = styled.div`
    color: ${bottom.TextStyle.color}
    font-size: ${bottom.TextStyle.fontSize}px;
    font-family: ${bottom.TextStyle.fontFamily};
`

console.log('FRONT', left)

    return (
        <div className="show-container">
            <div className='cube show-show'>
                <Front className='cube__face cube__face--front'>
                    <img className='box-image' src={front.ImageStyle.url} />
                    <div className='box-text'>{front.TextStyle.text}</div>
                </Front>
                <Back className='cube__face cube__face--back'>
                <img className='box-image' src={back.ImageStyle.url} />
                    <div className='box-text'>{back.TextStyle.text}</div>
                </Back>
                <Top className='cube__face cube__face--top'>
                <img className='box-image' src={top.ImageStyle.url} />
                    <div className='box-text'>{top.TextStyle.text}</div>
                </Top>
                <Bottom className='cube__face cube__face--bottom'>
                <img className='box-image' src={bottom.ImageStyle.url} />
                    <div className='box-text'>{bottom.TextStyle.text}</div>
                </Bottom>
                <Left className='cube__face cube__face--left'>
                <img className='box-image' src={left.ImageStyle.url} />
                    <div className='box-text'>{left.TextStyle.text}</div>
                </Left>
                <Right className='cube__face cube__face--right'>
                <img className='box-image' src={right.ImageStyle.url} />
                    <div className='box-text'>{right.TextStyle.text}</div>
                </Right>
                <div className='cube-face cube-shadow'></div>
            </div>
        </div>
    )
}

export default RenderBoxes;
