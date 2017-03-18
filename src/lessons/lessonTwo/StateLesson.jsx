import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Example from '../../components/Example';

const StateLesson = () => {
    return (
        <div>
            <ul>
                <li>Components may use local state to keep track of additional information.</li>
                <li>This state information is specific to each instance of that component</li>
                <li>For instance, whether an accordion element is expanded will likely be tracked in the state for the accordion component.</li>
                <li>Updating a component's state will trigger a re-render of that component</li>
                <li>Components may supply default initial state that can be used if they do not explicitly define their state object</li>
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
        </div>
    );
};

export default StateLesson;