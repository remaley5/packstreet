export const SET_CURRENT_SIDE = 'SET_CURRENT_SIDE';
export const SET_CURRENT_DROPDOWN = 'SET_CURRENT_DROPDOWN';

export const setCurrentSide = (side) => {
    return {
        type: SET_CURRENT_SIDE,
        side
    };
};

export const setCurrentDropdown = (component) => {
    return {
        type: SET_CURRENT_DROPDOWN,
        component
    }
}

const initialState = {currentSide: 'front', currentDropdown: 'material'}

export default function reducer (state = initialState, action) {
    Object.freeze(state);
    switch(action.type) {
        case SET_CURRENT_SIDE:
            return {...state, currentSide: action.side}
        case SET_CURRENT_DROPDOWN:
            return {...state, currentDropdown: action.component}
        default:
            return state
    }
}
