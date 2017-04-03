import React from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const LessonOne = (props) => (
    <div>
        <Title>Lesson 1 - Introduction to Redux</Title>
        <Section title="What Is Redux" defaultOpen={!props.params.section || props.params.section === 'intro'}>
            <ul>
                <li>Redux describes <a href="http://redux.js.org/" target="_blank">itself</a> as a predictable state container for JavaScript apps.</li>
                <li>Essentially it is a pattern for managing your application's state as well as user actions.</li>
                <li>It follows the CQRS or event sourcing patterns, so the code that fetches data has to follow a different code path than code that updates data.</li>
                <li>I have found that following the Redux pattern has reduced both the severity of bugs and the time spent troubleshooting them.</li>
                <li>I have also found that it is simple in concept yet difficult to properly implement.</li>
                <li>
                    Redux is not specific to React, there are Redux bindings for most major JavaScript view libraries.
                    <ul>
                        <li><a href="https://github.com/angular-redux/ng-redux" target="_blank">Angular</a></li>
                        <li><a href="https://github.com/angular-redux/store" target="_blank">Angular 2</a></li>
                        <li><a href="https://github.com/reactjs/react-redux" target="_blank">React</a></li>
                        <li><a href="https://github.com/steelsojka/aurelia-redux-plugin" target="_blank">Aurelia</a></li>
                        <li><a href="https://github.com/revue/revue" target="_blank">Vue</a></li>
                        <li><a href="https://github.com/ember-redux/ember-redux" target="_blank">Ember</a></li>
                    </ul>
                </li>
            </ul>
        </Section>
        <Section title="Basic Architecture" defaultOpen={props.params.section === 'basic'}>
            <ul>
                <li>Redux stores your application's state in an object called the <em>store</em>.</li>
                <li>There is only allowed to be one store per Redux application.</li>
                <li>However, you are allowed to break up your state into slices.</li>
                <li>Each slice of your state is called a <em>reducer</em>, which is really just a function that is responsible for returning the value of that slice of your state.</li>
                <li>The reducer controls the value of its own slice of state so that you are not allowed to directly update any data in the store.</li>
                <li>If you need to update the state then you have to dispatch an <em>action</em> that indicates what you want to do.</li>
                <li>The reducer functions for every slice are then called with the current state and that action and are allowed to return a new value for that slice of state that reflects the action.</li>
                <li>Components can subscribe to specific values from your state which allows them to access the current values.</li>
                <li>These subscriptions also allows Redux to re-render components whenever a state value subscribed by that component is updated.</li>
            </ul>
        </Section>
    </div>
);

export default LessonOne;