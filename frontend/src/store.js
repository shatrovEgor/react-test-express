import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import modal from './reducers/modal'
import auth from './reducers/auth'
import modalHello from './reducers/modalHello'
import modalQize from './reducers/modalQize'
import modalQizeEnd from './reducers/modalQizeEnd';
import saveQize from './reducers/saveQize';
import { reducer as reduxFormReducer } from 'redux-form';

const reducers = combineReducers({
    modal,
    auth,
    modalHello,
    modalQize,
    modalQizeEnd,
    saveQize,
    form: reduxFormReducer, // mounted under "form"
  });

const store = createStore(reducers, composeWithDevTools())

export default store