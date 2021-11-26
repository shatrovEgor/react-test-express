import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import modal from './reducers/modal'
import { reducer as reduxFormReducer } from 'redux-form';

const reducers = combineReducers({
    modal,
    form: reduxFormReducer, // mounted under "form"
  });

const store = createStore(reducers, composeWithDevTools())

export default store