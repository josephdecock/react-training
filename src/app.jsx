import React from 'react';
import ReactDOM from 'react-dom';

import ReactAgenda from './agendas/ReactAgenda';
import ReduxAgenda from './agendas/ReduxAgenda';

const App = () => (
    <div>
        <ReactAgenda />
        <ReduxAgenda />
    </div>
);

ReactDOM.render(<App />, document.getElementById('appRoot'));
