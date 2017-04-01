import React from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const LessonFour = () => (
    <div>
        <Title>Lesson 4 - Connected Components</Title>
        <Section title="Containers" defaultOpen>
            <ul>
                <li>Now that we have set up how your state can be updated, how do you get that state in to your components?</li>
                <li>Redux introduces the concept of a <em>container</em> component.</li>
                <li>
                    A container has several responsibilities
                    <ul>
                        <li>It subscribes to the store and maps state values to props that can be passed to a component.</li>
                        <li>It exposes the <em>dispatch</em> function so that it can be bound to action creators.</li>
                        <li>It watches for state changes and re-renders the component whenever one of its state props was modified.</li>
                    </ul>
                </li>
            </ul>
            <h3>Simplest Form</h3>
            <ul>
                <li>The most basic form of a connected component just maps state values to props and then wraps a component with those props.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`import { connect } from 'react-redux';
import { userSelector } from './userReducer';

const AuthorComponent = (props) => (
    <h3>{props.name}</h3>
);

const mapStateToProps = (state) => {
    const user = userSelector(state);
    return {
        name: user.name,
    };
};

export default connect(mapStateToProps)(AuthorComponent);
`}
                </CodeBlock>
                <div><em>mapStateToProps</em> takes in the current state and returns an object that will be passed in to the connected component as props.</div>
            </Example>
            <ul>
                <li>The output of the <em>connect</em> function is a higher order component.</li>
                <li>It is a component that renders the targeted component passing in the props.</li>
            </ul>
            <h3>Connecting to Actions</h3>
            <ul>
                <li>Your components will need to trigger actions and dispatch them to the store.</li>
                <li>Since connected components are the only components that are actually connected to the store, they are also the place where action creators can be bound to the dispatch function.</li>
                <li>The second parameter to the <em>connect</em> function is called <em>mapDispatchToProps</em>.</li>
                <li><em>mapDispatchToProps</em> can be either an object or a function.</li>
                <li>If it is an object, then every key on the object will be bound to the dispatch function connected to the current store.</li>
                <li>If it is a function, then the function will be called with the <em>dispatch</em> function and you will be expected to manually wire up the action creators.</li>
                <li>If you do not supply <em>mapDispatchToProps</em> then the connected component will just simply pass the <em>dispatch</em> function as a prop to your target component.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`import { connect } from 'react-redux';
import { userSelector } from './userReducer';
import { myActionCreator } from './actionCreator';

const AuthorComponent = (props) => (
    <h3 onClick={props.callAction}>{props.name}</h3>
);

const mapStateToProps = (state) => {
    const user = userSelector(state);
    return {
        name: user.name,
    };
};

const mapDispatchToProps = {
    callAction: myActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorComponent);
`}
                </CodeBlock>
                <div><em>AuthorComponent</em> will be passed a <em>callAction</em> prop that when called will call your action creator and then pass the results to the dispatch function.</div>
            </Example>
            <Example>
                <CodeBlock>
                    {`import { connect } from 'react-redux';
import { userSelector } from './userReducer';
import { myActionCreator } from './actionCreator';

const AuthorComponent = (props) => (
    <h3 onClick={props.callAction}>{props.name}</h3>
);

const mapStateToProps = (state) => {
    const user = userSelector(state);
    return {
        name: user.name,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        callAction: () => { dispatch(myActionCreator()); },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorComponent);
`}
                </CodeBlock>
                <div>Since <em>mapDispatchToProps</em> is a function in this case, it will be passed dispatch and expect you to wire up the action yourself.</div>
            </Example>
            <h3>Merging Props</h3>
            <ul>
                <li>The third parameter is for the merge props function.</li>
                <li>Merge props is responsible for combining the state props, dispatch props, and any props passed in from the parent component.</li>
                <li>By default it will use <em>{"Object.assign({}, ownProps, stateProps, dispatchProps)"}</em>.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`import { connect } from 'react-redux';
import { userSelector } from './userReducer';
import { myActionCreator } from './actionCreator';

const AuthorComponent = (props) => (
    <h3 onClick={props.callAction}>{props.name}</h3>
);

const mapStateToProps = (state) => {
    const user = userSelector(state);
    return {
        name: user.name,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        callAction: () => { dispatch(myActionCreator()); },
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, stateProps, dispatchProps, { customProp: 'testing' });
};
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps, mergeProps)(AuthorComponent);

const ParentComponent = () => (
    <div>
        <ConnectedComponent sampleOwnProp={10} />
    </div>
);
`}
                </CodeBlock>
                <div>This shows how you can use merge props to pass in arbitrary properties that are not state or dispatch props.</div>
                <div>It also shows that you can pass in an <em>ownProp</em> and have that get merged in with the state and dispatch props.</div>
            </Example>
        </Section>
    </div>
);

export default LessonFour;