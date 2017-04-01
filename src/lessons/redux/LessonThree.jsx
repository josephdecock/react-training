import React from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const LessonThree = () => (
    <div>
        <Title>Lesson 3 - Reducers and State</Title>
        <Section title="Reducers" defaultOpen>
            <ul>
                <li>Reducers in Redux are functions that update a specific slice of your application's state.</li>
                <li>
                    They are meant to be a "pure" function.
                    <ul>
                        <li>They should cause no side effects.</li>
                        <li>They should return the same value whenever they are called with the same parameters.</li>
                        <li>They should return new <em>copies</em> of the state and never mutate the existing state.</li>
                        <li>That last point is very important.  <em>Never</em> mutate an object in Redux.</li>
                    </ul>
                </li>
                <li>Reducers take in the current state as a parameter as well as an action and then perform some type of state update depending on the action type.</li>
                <li>Reducers must <strong>ALWAYS</strong> return the current state if the action type is not going to be handled.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`const initialState = {
    currentValue: 0,
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD': {
            return Object.assign({}, state, { currentValue: state.currentValue + action.payload });
        }
        case 'SUBTRACT': {
            return Object.assign({}, state, { currentValue: state.currentValue - action.payload });
        }
        default: {
            return state;
        }
    }
}`}
                </CodeBlock>
                <div>Notice the use of a default parameter <em>initialState</em>.  This allows us to have each reducer define its own initial default state.</div>
            </Example>
            <ul>
                <li>Every reducer is always executed for every action.</li>
                <li>The store's state is updated with the output of the calls to all of the reducers, which is why it is important that your reducer always returns the state even if the action is not one that it cares about.</li>
            </ul>

            <h3>Functional Concepts</h3>
            <ul>
                <li>Again, reducers are simply functions so they can be composed however you would like.</li>
                <li>You can nest reducers in other reducers.</li>
                <li>You can create a reducer that simply combines the output of other reducers.</li>
                <li>The important part is to design your state shape to match what you need, and then figure out how to create reducers that match that shape.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`const initialState = {
    nestedReducer1: {},
    nestedReducer2: {},
};

function reducer(state = initialState, action) {
    const reducer1 = nestedReducer1(state.nestedReducer1, action);
    const reducer2 = nestedReducer1(state.nestedReducer2, action);
    return Object.assign({}, { nestedReducer1: reducer1, nestedReducer2: reducer2 });
}
`}
                </CodeBlock>
                <div>This creates a reducer that simply composes the output of two other reducers.  All actions are passed down to the child reducers.  If I wanted, I could even have this parent reducer explicitly have its own state as well as the nested reducers.</div>
            </Example>
            <ul>
                <li>Redux provides a way to do the above example with the <em>combineReducers</em> function.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`import { combineReducers } from 'redux';

const reducer = combineReducers({
    nestedReducer1: nestedReducer1,
    nestedReducer2: nestedReducer2,
});
`}
                </CodeBlock>
                <div>This accomplishes pretty much the same thing as my first example.</div>
            </Example>
        </Section>
    </div>
);

export default LessonThree;