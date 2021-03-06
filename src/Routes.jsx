import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Home from './Home';
import ReactLessonOne from './lessons/react/LessonOne';
import ReactLessonTwo from './lessons/react/LessonTwo';
import ReactLessonThree from './lessons/react/LessonThree';
import ReactLessonFour from './lessons/react/LessonFour';
import ReactLessonFive from './lessons/react/LessonFive';
import ReactLessonSix from './lessons/react/LessonSix';
import ContactForm from './exercises/ContactForm';
import ReduxContactForm from './exercises/ReduxContactForm';
import ReduxLessonOne from './lessons/redux/LessonOne';
import ReduxLessonTwo from './lessons/redux/LessonTwo';
import ReduxLessonThree from './lessons/redux/LessonThree';
import ReduxLessonFour from './lessons/redux/LessonFour';
import ReduxLessonFive from './lessons/redux/LessonFive';
import ReduxLessonSix from './lessons/redux/LessonSix';
import ReduxLessonSeven from './lessons/redux/LessonSeven';

const Routes = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <IndexRedirect to="/react/lesson1" />
            <Route path="/react/lesson1" component={ReactLessonOne} />
            <Route path="/react/lesson2(/:section)" component={ReactLessonTwo} />
            <Route path="/react/lesson3" component={ReactLessonThree} />
            <Route path="/react/lesson4" component={ReactLessonFour} />
            <Route path="/react/lesson5" component={ReactLessonFive} />
            <Route path="/react/lesson6" component={ReactLessonSix} />
            <Route path="/exercise/react" component={ContactForm} />
            <Route path="/redux/lesson1(/:section)" component={ReduxLessonOne} />
            <Route path="/redux/lesson2(/:section)" component={ReduxLessonTwo} />
            <Route path="/redux/lesson3(/:section)" component={ReduxLessonThree} />
            <Route path="/redux/lesson4" component={ReduxLessonFour} />
            <Route path="/redux/lesson5" component={ReduxLessonFive} />
            <Route path="/redux/lesson6" component={ReduxLessonSix} />
            <Route path="/redux/lesson7(/:section)" component={ReduxLessonSeven} />
            <Route path="/exercise/redux" component={ReduxContactForm} />
        </Route>
    </Router>
);

export default Routes;