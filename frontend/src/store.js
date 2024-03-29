import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import modal from './reducers/modal'
import auth from './reducers/auth'
import modalHello from './reducers/modalHello'
import modalQize from './reducers/modalQize'
import modalQizeEnd from './reducers/modalQizeEnd';
import saveQize from './reducers/saveQize';
import modalReg from './reducers/modalReg'
import modalLoader from './reducers/modalLoader'
import { reducer as reduxFormReducer } from 'redux-form';

const reducers = combineReducers({
    modal,
    auth,
    modalHello,
    modalQize,
    modalQizeEnd,
    saveQize,
    modalReg,
    modalLoader,
    form: reduxFormReducer, // mounted under "form"
  });

const store = createStore(reducers, composeWithDevTools())

export default store