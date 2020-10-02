import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentDropdown } from '../../../store/reducers/design';

const options = ['size', 'material', 'design', 'quantity', 'reset'];

class LeftChoices extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    capitalize = (choice) => {
        if (typeof choice !== 'string') return ''
        return choice.charAt(0).toUpperCase() + choice.slice(1)
    }

    changeDropdown = (e) => {
        const component = this.capitalize(e.target.value)
        this.props.setCurrentDropdown(component);
    }

    render() {
        return (
            <>
                <div className='design-page__option-bar-left'>
                    <div className="options" >
                        {options.map(option => {
                            return (
                                <button type="button" name={option} className='design-page__option-bar-left__option' value={option} onClick={this.changeDropdown} >{option}</button>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { currentDropdown: state.design.currentDropdown }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentDropdown: (option) => dispatch(setCurrentDropdown(option))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftChoices);





// import React, { Component } from 'react';
// import { setCurrentDropdown } from '../../../store/reducers/design'
// const options = ['size', 'material', 'design', 'quantity', 'reset'];

// class LeftChoices extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dropdown: null
//         }
//     }

//     capitalize = (choice) => {
//         if (typeof choice !== 'string') return ''
//         return choice.charAt(0).toUpperCase() + choice.slice(1)
//     }

//     handleClick = (e) => {
//         const component = this.capitalize(e.target.value);
//         console.log('COMPONENT', component);
//         this.props.setCurrentDropdown(component);
//     }

//     render() {
//         return (
//             <>
//                 <div className='design-page__option-bar-left'>
//                     {options.map(option => {
//                         return (
//                         <button className='design-page__option-bar-left__option' value={option} onClick={this.handleClick}>{option}</button>
//                         )
//                     })}
//                 </div>

//                 {/* <div className='design-page__option-bar-left__drop-down'>
//                 <div className='design-page__option-bar-left__drop-down__header'>
//                     Select stock size
//                 </div>
//                 <div className='design-page__option-bar-left__drop-down__option'>
//                     4" x 4" x 2"
//                 </div>
//                 <div className='design-page__option-bar-left__drop-down__option'>
//                     4" x 4" x 2"
//                 </div>
//                 <div className='design-page__option-bar-left__drop-down__option'>
//                     4" x 4" x 2"
//                 </div>
//                 <div className='design-page__option-bar-left__drop-down__option'>
//                     4" x 4" x 2"
//                 </div>
//                 <div className='design-page__option-bar-left__drop-down__option'>
//                     4" x 4" x 2"
//                 </div>
//                 <div className='design-page__option-bar-left__drop-down__option'>
//                     4" x 4" x 2"
//                 </div>
//             </div> */}
//             </>
//         )
//     }
// };

// const mapStateToProps = (state) => {
//     console.log('STATE', state)
//     debugger;
//     return { currentDropdown: state.design.currentDropdown }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setCurrentDropdown: (component) => dispatch(setCurrentDropdown(component))
//     }
// };

// // export default LeftChoices;
// export default (mapStateToProps)(mapDispatchToProps)(LeftChoices);
