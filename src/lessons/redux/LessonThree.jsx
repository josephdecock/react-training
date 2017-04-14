import React from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const LessonThree = (props) => (
    <div>
        <Title>Lesson 3 - Reducers and State</Title>
        <Section title="Reducers" defaultOpen={props.params.section === 'reducers' || !props.params.section}>
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
            <ul>
                <li>One other thing that you could do with functional concepts is make a higher order reducer if you have a lot of shared logic.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`const REQUEST_STATUS = {
    FETCHING: 'FETCHING',
    NONE: 'NONE',
    FAILED: 'FAILED',
};
const initialState = {
    data: {},
    status: REQUEST_STATUS.NONE,
    errorMessage: null,
};
const higherOrderReducer = (prefix) => {
    return function(state = initialState, action) {
        switch (action.type): {
            case \`\${prefix}_FETCHING\`: {
                return Object.assign({}, state, { data: {}, status: REQUEST_STATUS.FETCHING, errorMessage: null });
            }
            case \`\${prefix}_FETCHED\`: {
                return Object.assign({}, state, { data: action.data, status: REQUEST_STATUS.NONE, errorMessage: null });
            }
            case \`\${prefix}_ERROR\`: {
                return Object.assign({}, state, { data: {}, status: REQUEST_STATUS.FAILED, errorMessage: action.error });
            }
            default:
                return state;
        }
    };
};

const postsReducer = higherOrderReducer('POSTS');
const authorsReducer = higherOrderReducer('AUTHORS');
`}
                </CodeBlock>
            </Example>
        </Section>
        <Section title="State" defaultOpen={props.params.section === 'state'}>
            <ul>
                <li>Redux has techniques to expose your state to your application.</li>
                <li>However, there are also ways that you can grab references to your state outside of those approved ways.</li>
                <li>It is <strong>strongly</strong> recommended that you only use the approved ways of getting access to the state.</li>
                <li>If you try to reference it on your own you might be accessing state that has been partially updated.</li>
            </ul>
            <h3>Designing your state</h3>
            <ul>
                <li>It is highly recommended that you spend time before writing any code to design the shape of your state.</li>
                <li>If you just start coding away you may find yourself coded into a corner when it comes to your state.</li>
                <li>Also consider how you will access your state when designing the shape.</li>
                <li>If you are storing an array of objects and you are planning on searching for a single item then consider normalizing your state.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`// un-normalized
const state = {
    posts: [{ title: 'Hello', id: 10 }],
};

// normalized
const state = {
    postIds: [ 10 ],
    postsById: {
        10: {
            title: 'Hello',
            id: 10,
        },
    },
};`}
                </CodeBlock>
                <div>This approach allows you to still easily iterate over the posts (using the array of ids) as well as query by id.</div>
            </Example>
            <ul>
                <li><a href="https://github.com/paularmstrong/normalizr" target="_blank">Normalizr</a> is a decent library that normalizes your JSON data for you.</li>
                <li>You supply a schema of the JSON data and it will transform it for you.</li>
                <li>This is more useful if you have deeply nested JSON objects.</li>
            </ul>
        </Section>
        <Section title="Selectors" defaultOpen={props.params.section === 'reselect'}>
            <ul>
                <li>So you have designed your state and created your reducers that let you update your state.  Now how do you access this state?</li>
                <li>Usually you will want to create a <em>selector</em>, which is essentially a function that returns a specific value from the state.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`const state = {
    postIds: [ 10 ],
    postsById: {
        10: {
            title: 'Hello',
            id: 10,
        },
    },
};

// this is a selector that returns all posts
const postsSelector = (state) => state.postIds.map((id) => state.postsById[id]);

// this is a selector that returns a specific post
const postByIdSelector = (state, postId) => state.postsById[postId];`}
                </CodeBlock>
            </Example>
            <h3>Reselect</h3>
            <ul>
                <li>Your selectors can also perform calculations on your state and return the calculated values.</li>
                <li>It is usually preferable to put your raw data in your state, or at least as close to raw as possible, and then use selectors for expensive calculations.</li>
                <li>This is also where the <a href="https://github.com/reactjs/reselect" target="_blank">reselect</a> library comes in to play.</li>
                <li>Reselect memoizes the output, so it will cache the output and return the cached value every time that it is called with the same parameters.</li>
                <li>Since the state (or slice of state) is included in the parameters to the selector, this means that the selector will only ever execute once for a given state value.</li>
                <li>Again, since selectors are simply functions then you can compose them into higher level selectors.</li>
                <li>Reselect also lets you combine multiple selectors into one and then output a single value.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`import { createSelector } from 'reselect';
const state = {
    userIds: [ 1, 2 ],
    usersById: {
        1: {
            name: 'User 1',
        },
        2: {
            name: 'User 2',
        },
    },
    postIds: [ 10, 11, 12 ],
    postsById: {
        10: {
            title: 'Hello',
            author: 1,
        },
        11: {
            title: 'Hello 2',
            author: 2,
        },
        12: {
            title: 'Hello 3',
            author: 1,
        },
    },
};

const usersByIdSelector = (state) => state.usersById);
const postsSelector = (state) => state.postIds.map((id) => state.postsById[id]);

// this takes the two selectors and mashes them together into a single output
const combinedSelector = createSelector(usersByIdSelector, postsSelector, (usersById, posts) => {
    return posts.map((post) => return Object.assign({}, post, { author: usersById[post.author]}));
});
`}
                </CodeBlock>
            </Example>
        </Section>
    </div>
);

export default LessonThree;