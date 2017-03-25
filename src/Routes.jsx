import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Home from './Home';
import LessonOne from './lessons/LessonOne';
import LessonTwo from './lessons/LessonTwo';
import LessonThree from './lessons/LessonThree';
import LessonFour from './lessons/LessonFour';
import LessonFive from './lessons/LessonFive';
import LessonSix from './lessons/LessonSix';

const Routes = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <IndexRedirect to="/lesson1" />
            <Route path="/lesson1" component={LessonOne} />
            <Route path="/lesson2(/:section)" component={LessonTwo} />
            <Route path="/lesson3" component={LessonThree} />
            <Route path="/lesson4" component={LessonFour} />
            <Route path="/lesson5" component={LessonFive} />
            <Route path="/lesson6" component={LessonSix} />
        </Route>
    </Router>
);

export default Routes;