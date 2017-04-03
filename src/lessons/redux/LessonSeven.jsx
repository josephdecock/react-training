import React from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const LessonSeven = (props) => (
    <div>
        <Title>Lesson 7 - Practical Considerations</Title>
        <Section title="Unit Testing with Enzyme and JsDom" defaultOpen={props.params.section === 'unit-testing' || !props.params.section}>
            <ul>
                <li>Since a large portion of Redux is functional in design, the individual functions are pretty easy to test.</li>
                <li>If you use middleware to handle your asynchronous actions, then your action creators are synchronous functions that return plain objects which is easy to test.</li>
                <li>Reducers are pure functions and as such are easy to test.</li>
                <li>Components are really the only piece that might be harder due to requiring a DOM.</li>
                <li>However, <a href="https://github.com/airbnb/enzyme" target="_blank">Enzyme</a> and <a href="https://github.com/tmpvar/jsdom" target="_blank">JSDom</a> make it possible to write real unit tests for components.</li>
                <li>Enzyme allows you to <em>shallow</em> render a component.  Shallow rendering means that Enyzme will just track all of the components directly nested within your component, but not render the full trees.</li>
                <li>Enzyme also provides a way for you to search for elements, like jQuery selectors, and then assert things like what props were passed to the component.</li>
                <li>This allows you to really test a component without relying on the behavior of the child components.</li>
                <li>JSDom provides a JavaScript implementation of the DOM without needing a browser, so your components can still render.</li>
                <li>This is faster and much lighter weight than PhantomJS, and it does not require fully rendering your components.</li>
            </ul>
        </Section>
        <Section title="Code Structure" defaultOpen={props.params.section === 'structure'}>
            <ul>
                <li>One popular file system structure is commonly called <a href="https://github.com/erikras/ducks-modular-redux" target="_blank">ducks</a>.</li>
                <li>This approach asks you to combine your reducer with the selectors and action creators that deal with that specific slice of state into a single file, called a <em>module</em>.</li>
                <li>The idea is that when you need to modify your state you will need to create an action creator, selector, and tweak your reducer so why not put them all in a single file?</li>
                <li>I personally like this approach, but one negative is that it can cause you to think of action creators as being tied one-to-one with a reducer.</li>
                <li>In reality, every reducer is called with every action so you should not think of actions as being specific to a reducer.</li>
                <li>My personal opinion is that the action creators, or at the very least the action type constants, should be defined all on their own similar to how you define your .NET interfaces separate from the implementation.</li>
            </ul>
        </Section>
    </div>
);

export default LessonSeven;