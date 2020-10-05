import { SIGNUP } from './authentication';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign( {}, state);
    switch(action.type) {
        case SIGNUP:
            newState[action.user.id] = action.user;
            return newState;
        default:
            return state;
    }
}

export default usersReducer;
