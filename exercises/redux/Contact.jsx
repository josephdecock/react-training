import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Store';
import Contacts from './components/Contacts';

const App = () => (
    <Provider store={Store}>
        <div>
            <h1>Redux Contact Form</h1>
            <Contacts />
        </div>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('appRoot'));