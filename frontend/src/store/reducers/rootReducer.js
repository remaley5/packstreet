import {
    combineReducers,
} from 'redux';

import authentication from "./authentication";

import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    auth: authentication,
    users: usersReducer,
});

export default rootReducer;
