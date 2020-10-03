import React from 'react';
import styled from 'styled-components';
import image from '../../../images/package-choices/image-choice-spider.png';


const RenderBox = ({currentSide, packageFaces}) => {

    console.log('faces', packageFaces);
    const faces = packageFaces;

    const right = faces.right;
    const left = faces.left;
    const top = faces.top;
    const bottom = faces.bottom;
    const back = faces.back;
    const front = faces.front;
    console.log('BOTTOM COLOR', bottom.textStyle.color)

    var Right = styled.div`
    color: ${right.textStyle.color};
    font-family: ${right.textStyle.font};
    font-size: ${right.textStyle.fontSize}
`
    var Left = styled.div`
    color: ${left.textStyle.color}
    font-family: ${left.textStyle.font};
`
    var Front = styled.div`
    color: ${front.textStyle.color}
    font-family: ${front.textStyle.font};
`
    var Back = styled.div`
    color: ${back.textStyle.color}
    font-family: ${back.textStyle.font};
`
    var Top = styled.div`
    color: ${top.textStyle.color}
    font-family: ${top.textStyle.font};
`
    var Bottom = styled.div`
    color: ${bottom.textStyle.color}
    font-family: ${bottom.textStyle.font};
`

    return (
        <div className="render-container">
            <div className={`cube show-${currentSide}`}>
                <Front className={`cube__face cube__face--front`}>
                    <img className='box-image' src={image}/>
                    <div className='box-text'>{front.textStyle.text}</div>
                </Front>
                <Back className={`cube__face cube__face--back`}>{back.textStyle.text}</Back>
                <Top className={`cube__face cube__face--top`}>{top.textStyle.text}</Top>
                <Bottom className={`cube__face cube__face--bottom`}>{bottom.textStyle.text}</Bottom>
                <Left className={`cube__face cube__face--left`}>{left.textStyle.text}</Left>
                <Right className={`cube__face cube__face--right`}>{right.textStyle.text}</Right>
            </div>
        </div>
    )
}

export default RenderBox;
