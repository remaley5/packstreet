import {
    combineReducers,
} from 'redux';

import authentication from "./authentication";
import usersReducer from './usersReducer';
import packages from './packages';

const rootReducer = combineReducers({
    packages,
    auth: authentication,
    users: usersReducer,
});

export default rootReducer;
