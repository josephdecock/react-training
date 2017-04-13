import React from 'react';
import { Link } from 'react-router';

const ReactAgenda = () => (
    <div className="react-training-agenda agenda">
        <h1>React Agenda</h1>
        <ul>
            <li><Link to="/react/lesson1">Introduction</Link></li>
            <li>
                <div><Link to="/react/lesson2">Components</Link></div>
                <ul>
                    <li><Link to="/react/lesson2/elements">Elements</Link></li>
                    <li><Link to="/react/lesson2/jsx">JSX</Link></li>
                    <li><Link to="/react/lesson2/props">Props</Link></li>
                    <li><Link to="/react/lesson2/classes">Classes</Link></li>
                    <li><Link to="/react/lesson2/state">State</Link></li>
                    <li><Link to="/react/lesson2/lifecycle">Lifecycle</Link></li>
                    <li><Link to="/react/lesson2/sfc">Stateless Functional Components</Link></li>
                    <li><Link to="/react/lesson2/classesVsfc">Classes vs Stateless Functional Components</Link></li>
                </ul>
            </li>
            <li><Link to="/react/lesson3">Forms</Link></li>
            <li><Link to="/react/lesson4">Higher Order Components</Link></li>
            <li><Link to="/react/lesson5">Routing</Link></li>
            <li><Link to="/react/lesson6">Component Libraries</Link></li>
            <li><Link to="/exercise/react">React Exercise</Link></li>
        </ul>
    </div>
);

export default ReactAgenda;