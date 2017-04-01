import React from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const LessonSix = (props) => (
    <div>
        <Title>Lesson 6 - Middleware and Asynchronous Behavior</Title>
        <Section title="Middleware" defaultOpen>
            <ul>
                <li>You be wondering how to perform asynchronous actions since everything that we have looked at so far have required actions to be synchronous with no side effects.</li>
                <li>The short answer is middleware.</li>
                <li>Every action that is dispatched has to run through the full middleware chain before getting sent to each reducer.</li>
                <li>Individual pieces of middleware have the ability to stop an action, or even dispatch brand new actions, or modify the current action.</li>
                <li>There are libraries out there, like redux-thunk or redux-pack, that let you do asynchronous things in your action creators.</li>
                <li>However, I would advise you to consider writing your own middleware to serve your needs.</li>
                <li>Middleware is applied to the store when you originally create your store.</li>
                <li>Since middleware are simply functions, again, you can compose more than one middleware in a chain.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`const fetchMiddleware = (store) => (next) => (action) => (dispatch) => {
    if (action.type === 'FETCH_ACTIONS') {
        // dispatch an action indicating that we are starting the fetch
        dispatch({
            type: action.pendingActionType
        });
        fetch(action.url).then((data) => {
            dispatch({
                type: action.successActionType,
                data: data,
            });
        }, (error) => {
            dispatch({
                type: action.errorActionType,
                error: error,
            });
        });
    } else {
        // if it is not the action type we care about then continue it along
        next(action);
    }
};

createStore(rootReducer, applyMiddleware(fetchMiddleware));

dispatch({
    type: 'FETCH_ACTIONS',
    url: 'http://localhost:3000/contacts',
    pendingActionType: 'FETCHING_CONTACTS',
    successActionType: 'FETCHED_CONTACTS',
    errorActionType: 'FAILED_FETCHING_CONTACTS',
});`}
                </CodeBlock>
                <div>This is a pretty simple piece of middleware that will take a simple object action and convert it into an asynchronous sequence of multiple actions.</div>
                <div>This specific middleware is generic enough that you could use it for probably most of your AJAX requests, although you should add more features like pass parameters, or change the HTTP verb, etc...</div>
            </Example>
            <ul>
                <li>One piece of advice that I would have would be to expose an action creator in your middleware that creates the specific type of action used by your middleware.</li>
                <li>This would help to ensure that it was always called with the correct parameters.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`// using a symbol to require that all fetch actions must come through my action creator
const FETCH_ACTION_TYPE = Symbol('FETCH_ACTION');
export function createFetchAction(url, pendingType, successType, failedType) {
    return {
        type: FETCH_ACTION_TYPE,
        url: url,
        pendingActionType: pendingType,
        successActionType: successType,
        errorActionType: failedType,
    };
}

export const fetchMiddleware = (store) => (next) => (action) => (dispatch) => {
    if (action.type === FETCH_ACTION_TYPE) {
        ...
    } else {
        next(action);
    }
};

/* --------------------- */
export const fetchPosts = () => {
    return createFetchAction('http://localhost:3000/posts', 'FETCHING_POSTS', 'FETCHED_POSTS', 'FAILED_POSTS');
};`}
                </CodeBlock>
                <div>One really nice advantage of using middleware is when it comes to unit testing.  Your action creator becomes extremely simple to test.</div>
            </Example>
        </Section>
    </div>
);

export default LessonSix;