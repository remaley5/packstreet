import React, { Component } from 'react';

class DesignRender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 'front',
            dropdown: 'hide',
            currentClass: ''
        }
    }

    changeSide= (e) => {
        console.log('inChangeSide', e.target.value);
        let cube = document.querySelector('.cube');
        console.log('cube', cube);
        console.log('cube after currentClass', cube);
        let showClass = 'show-' + e.target.value;
        if (this.state.currentClass) {
            cube.classList.remove(this.state.currentClass);
        }
        cube.classList.add(showClass);
        this.state.currentClass = showClass;
    }

    render() {
        return (
            <>
                <div className="render-container">
                    <div className="cube show-front">
                        <div className="cube__face cube__face--front"><p>front</p></div>
                        <div className="cube__face cube__face--back">back</div>
                        <div className="cube__face cube__face--right">right</div>
                        <div className="cube__face cube__face--left"><p>Queeen</p></div>
                        <div className="cube__face cube__face--top">top</div>
                        <div className="cube__face cube__face--bottom">bottom</div>
                    </div>
                </div>
                <div className='design-page__box-rendering-container__select-side__label'>
                    Select side
                    </div>

                <p className="button-group" >

                        <button type="button" name="rotate-cube-side" value="front" onClick={this.changeSide} >  front </button>

                        <button type="button" name="rotate-cube-side" value="right" onClick={this.changeSide} > right </button>

                        <button type="button" name="rotate-cube-side" value="back" onClick={this.changeSide} > back </button>

                        <button type="button" name="rotate-cube-side" value="left" onClick={this.changeSide} > left </button>

                        <button type="button" name="rotate-cube-side" value="top" onClick={this.changeSide} > top </button>

                        <button type="button" name="rotate-cube-side" value="bottom" onClick={this.changeSide} > bottom </button>
                </p>
            </>
        )
    }
}

export default DesignRender;
