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
                    <li><Link to="/lesson2/sfc">Stateless Functional Components</Link></li>
                    <li><Link to="/lesson2/classesVsfc">Classes vs Stateless Functional Components</Link></li>
                </ul>
            </li>
            <li><Link to="/lesson3">Forms</Link></li>
            <li><Link to="/lesson4">Higher Order Components</Link></li>
            <li><Link to="/lesson5">Routing</Link></li>
            <li>Component Libraries</li>
        </ul>
    </div>
);

export default ReactAgenda;