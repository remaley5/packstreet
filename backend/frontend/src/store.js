import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk),
  );
};

store.subscribe(() => {
  saveState(store.getState());
});

export default configureStore;
