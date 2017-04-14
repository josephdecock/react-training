import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import Example from '../../../components/Example';

const StateLesson = () => {
    return (
        <div>
            <ul>
                <li>Components may use local state to keep track of additional information that may or may not be passed in via props.</li>
                <li>This state information is specific to each instance of that component.</li>
                <li>For instance, whether an accordion element is expanded will likely be tracked in the state for the accordion component.</li>
                <li>Updating a component's state will trigger a re-render of that component.</li>
                <li>Components may supply default initial state that can be used if they do not explicitly define their state object.</li>
                <li>Usually you will want to initialize your state in your component's constructor</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myKey: 'my value',
        };
    }

    render() {
        return (
            <div>{this.state.myKey}</div>
        );
    }   
}`}
                </CodeBlock>
            </Example>
            <h3>Updating State</h3>
            <ul>
                <li>The state updates asynchronously when called.</li>
                <li>State updating occurs as a merge, so you only need to specify the properties that are changing when you update state.</li>
                <li>Even though the component re-renders when the state is updated, the re-render will not guaranteed to occur in the same event loop.</li>
                <li>React might in some cases merge multiple state update calls into a single update, so don't expect the state in subsequent updates to be fully updated.</li>
                <li>If you need to chain state updates, you will need to pass a callback to your state update function.</li>
                <li>This is also important to remember when doing unit tests.  If your code under test calls <em>setState</em> then you are going to need to deal with asynchronous behavior.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myKey: 'my value',
        };
    }

    render() {
        return (
            <div onClick={() => this.setState({ myKey: 'new value' })}>{this.state.myKey}</div>
        );
    }   
}`}
                </CodeBlock>
                <div>Clicking on the div will trigger a call to <em>setState</em> that updates the state.  After the state is updated, the component will be re-rendered with the new state data and the new string will appear in the UI</div>
            </Example>
            <ul>
                <li>Both the props and state can be updated asynchronously at any time, so if you need to rely on both the props and the state when updating your state you might have stale values.</li>
                <li>There is another signature for setState that you can use in this situation.</li>
            </ul>
                        <Example>
                <CodeBlock>
                    {`this.setState((prevState, props) => {
    // whatever I return from here will be merged with my state
    return {
        myKey: prevState.count + props.index,
    };
});`}
                </CodeBlock>
                <div>React will call this with the previous state as well as the current props so you can be sure that you are using the current data.</div>
            </Example>
        </div>
    );
};

export default StateLesson;