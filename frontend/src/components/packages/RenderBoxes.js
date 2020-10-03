import React from 'react';
import styled from 'styled-components';
import image from '../../images/package-choices/image-choice-spider.png';


const RenderBoxes = ({currentSide, design}) => {

    const faces = design.PackageFaces;
    // console.log('dsign', design);
    // console.log('packageFaces', design.PackageFaces);
    // debugger;
    // console.log('face1', design.PackageFaces[0]);
    // console.log(faces[1]);
    // debugger;
    const front = faces[0];
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
    color: ${left.TextStyle.color}
`
    var Front = styled.div`
    color: ${front.TextStyle.color}
`
    var Back = styled.div`
    color: ${back.TextStyle.color}
`
    var Top = styled.div`
    color: ${top.TextStyle.color}
`
    var Bottom = styled.div`
    color: ${bottom.TextStyle.color}
`

    return (
        <div className="show-container">
            <div className='cube show-show'>
                <Front className='cube__face cube__face--front shadow-side'>
                    <img className='box-image' src=''/>
                    <div className='box-text'>{front.TextStyle.text}</div>
                </Front>
                <Back className='cube__face cube__face--back'>{back.TextStyle.text}</Back>
                <Top className='cube__face cube__face--top light-side'>{top.TextStyle.text}</Top>
                <Bottom className='cube__face cube__face--bottom'>{bottom.TextStyle.text}</Bottom>
                <Left className='cube__face cube__face--left'>{left.TextStyle.text}</Left>
                <Right className='cube__face cube__face--right'>{right.TextStyle.text}</Right>
                <div className='cube-face cube-shadow'></div>
            </div>
        </div>
    )
}

export default RenderBoxes;
