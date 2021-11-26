import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import modal from './reducers/modal'

const reducers = combineReducers({
    modal,
  });

const store = createStore(reducers, composeWithDevTools())

export default store