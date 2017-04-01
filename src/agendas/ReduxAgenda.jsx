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
            <li><Link to="/redux/lesson3">Reducers and State</Link></li>
            <li>Connected Components</li>
            <li>ImmutableJS</li>
            <li>Middleware/Asynchronous Operations</li>
        </ul>
    </div>
);

export default ReduxAgenda;