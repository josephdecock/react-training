import React from 'react';
import { Link } from 'react-router';

const ReduxAgenda = () => (
    <div className="redux-training-agenda agenda">
        <h1>Redux Agenda</h1>
        <ul>
            <li>
                <div><Link to="/redux/lesson1">Introduction</Link></div>
                <ul>
                    <li><Link to="/redux/lesson1/intro">Introduction</Link></li>
                    <li><Link to="/redux/lesson1/basic">Basic Architecture</Link></li>
                </ul>
            </li>
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
            <li><Link to="/redux/lesson5">ImmutableJS</Link></li>
            <li><Link to="/redux/lesson6">Middleware/Asynchronous Operations</Link></li>
            <li>
                <div><Link to="/redux/lesson7">Practical Considerations</Link></div>
                <ul>
                    <li><Link to="/redux/lesson7/unit-testing">Unit Testing</Link></li>
                    <li><Link to="/redux/lesson7/structure">Code Structure</Link></li>
                </ul>
            </li>
            <li><Link to="/exercise/redux">Redux Exercise</Link></li>
        </ul>
    </div>
);

export default ReduxAgenda;