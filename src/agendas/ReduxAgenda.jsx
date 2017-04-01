import React from 'react';
import { Link } from 'react-router';

const ReduxAgenda = () => (
    <div className="redux-training-agenda agenda">
        <h1>Redux Agenda</h1>
        <ul>
            <li><Link to="/redux/lesson1">Introduction</Link></li>
            <li>
                <div><Link to="/redux/lesson2">Actions and Action Creators</Link></div>
                <ul>
                    <li><Link to="/redux/lesson2/actions">Actions</Link></li>
                    <li><Link to="/redux/lesson2/action-creators">Action Creators</Link></li>
                    <li><Link to="/redux/lesson2/higher-order">Higher Order</Link></li>
                </ul>
            </li>
            <li>
                <div><Link to="/redux/lesson3">Reducers and State</Link></div>
                <ul>
                    <li><Link to="/redux/lesson3/reducers">Reducers</Link></li>
                    <li><Link to="/redux/lesson3/state">State</Link></li>
                    <li><Link to="/redux/lesson3/reselect">Selectors</Link></li>
                </ul>
            </li>
            <li><Link to="/redux/lesson4">Connected Components</Link></li>
            <li>ImmutableJS</li>
            <li>Middleware/Asynchronous Operations</li>
            <li>Practical Considerations</li>
        </ul>
    </div>
);

export default ReduxAgenda;