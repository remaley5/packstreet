import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import  thunk  from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeEnhancer = composeEnhancers(applyMiddleware(thunk));

const configureStore = () => {
  return createStore(
    rootReducer,
    storeEnhancer
  );
};

export default configureStore;
