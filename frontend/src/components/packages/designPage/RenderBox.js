import React from 'react';
import styled from 'styled-components';
import cardboard from '../../../images/cardboard-box.jpg';

const RenderBox = ({currentSide, designState}) => {

    console.log('faces', designState.savedPackageDesign);
    const faces = designState.savedPackageDesign.packageFaces;

    const right = faces.right;
    const left = faces.left;
    const top = faces.top;
    const bottom = faces.bottom;
    const back = faces.back;
    const front = faces.front;

    console.log('RIGHHT COLOR', right.textStyle.color);


    var Right = styled.div`
    color: ${right.textStyle.color}
`

    var Left = styled.div`
    color: ${left.textStyle.color}
`
    var Front = styled.div`
    color: ${front.textStyle.color}
`
    var Back = styled.div`
    color: ${back.textStyle.color}
`
    var Top = styled.div`
    color: ${top.textStyle.color}
`
    var Bottom = styled.div`
    color: ${bottom.textStyle.color}
`

    return (
        <div className="render-container">
            <div className={`cube show-${currentSide}`}>
                <Front className={`cube__face cube__face--front`}>TEST</Front>
                <Back className={`cube__face cube__face--back`}>TEST</Back>
                <Top className={`cube__face cube__face--top`}>TEST</Top>
                <Bottom className={`cube__face cube__face--bottom`}>TEST</Bottom>
                <Left className={`cube__face cube__face--left`}>TEST</Left>
                <Right className={`cube__face cube__face--right`}>TEST</Right>
            </div>
        </div>
    )
}

export default RenderBox;
