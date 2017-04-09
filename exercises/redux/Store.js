import { combineReducers, createStore, compose, applyMiddleware }  from 'redux';
import Contacts from './modules/Contacts';
import AddContact from './modules/AddContact';
import AjaxMiddleware from './modules/middleware/Ajax';

const rootReducer = combineReducers({
    contacts: Contacts,
    addContact: AddContact,
});

// Compose all middleware functions into the redux execution chain (ordering may be important to you)
let composedMiddleware = compose(
  applyMiddleware(AjaxMiddleware),
);

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    composedMiddleware = compose(composedMiddleware, window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default createStore(rootReducer, composedMiddleware);

