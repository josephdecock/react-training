import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Home from './Home';
import LessonOne from './lessons/LessonOne';
import LessonTwo from './lessons/LessonTwo';

const Routes = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <IndexRedirect to="/lesson1" />
            <Route path="/lesson1" component={LessonOne} />
            <Route path="/lesson2(/:section)" component={LessonTwo} />
        </Route>
    </Router>
);

export default Routes;