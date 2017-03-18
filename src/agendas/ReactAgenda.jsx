import React from 'react';
import { Link } from 'react-router';

const ReactAgenda = () => (
    <div className="react-training-agenda agenda">
        <h1>React Agenda</h1>
        <ul>
            <li><Link to="/lesson1">Introduction</Link></li>
            <li>
                <div><Link to="/lesson2">Components</Link></div>
                <ul>
                    <li><Link to="/lesson2/elements">Elements</Link></li>
                    <li><Link to="/lesson2/jsx">JSX</Link></li>
                    <li><Link to="/lesson2/props">Props</Link></li>
                    <li><Link to="/lesson2/classes">Classes</Link></li>
                    <li><Link to="/lesson2/state">State</Link></li>
                    <li><Link to="/lesson2/lifecycle">Lifecycle</Link></li>
                    <li>Stateless Functional Components</li>
                    <li>Classes vs Stateless Functional Components</li>
                </ul>
            </li>
            <li>Forms</li>
            <li>Higher Order Components</li>
            <li>Routing</li>
        </ul>
    </div>
);

export default ReactAgenda;