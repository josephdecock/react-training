import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import Example from '../../../components/Example';

const ClassLesson = () => {
    return (
        <div>
            <ul>
                <li>Writing <em>React.createElement</em> every time that you want to create a component does not feel very modern, which is fine because React provides an abstract class for you to use instead</li>
                <li>As long as your class extends from <em>React.Component</em> and provides a render method then it will work as a React component</li>
                <li>Props are passed in to the constructor of the component and added to the instance so they can be referenced by <em>this.props</em></li>
            </ul>
            <Example>
                <CodeBlock>
                    {`class MyComponent extends React.Component {
    render() {
        return (
            <div>{this.props.myContent}</div>
        );
    }
}`}
                </CodeBlock>
                <div>This is essentially the bare-minimum needed to create a component using a class.</div>
            </Example>
            <Example>
                <CodeBlock>
                    {`class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.props.myContent = this.props.myContent || 'default content';
    }
    render() {
        return (
            <div>{this.props.myContent}</div>
        );
    }
}`}
                </CodeBlock>
                <div>This is an example of using the constructor to perform some basic initialization.</div>
            </Example>
        </div>
    );
};

export default ClassLesson;