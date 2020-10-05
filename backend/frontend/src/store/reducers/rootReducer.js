import {
    combineReducers,
} from 'redux';

import authentication from "./authentication";
import usersReducer from './usersReducer';
import packages from './packages';
import design from './design'

const rootReducer = combineReducers({
    packages,
    auth: authentication,
    users: usersReducer,
    design,
});

export default rootReducer;
