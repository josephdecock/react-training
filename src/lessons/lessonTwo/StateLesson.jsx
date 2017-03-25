import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Example from '../../components/Example';

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
                <li>It does accept a callback though, so if you need to chain state updates then you can register a callback that performs the subsequent updates.</li>
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
        </div>
    );
};

export default StateLesson;