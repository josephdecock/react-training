import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Example from '../../components/Example';

const ClassLesson = () => {
    return (
        <div>
            <ul>
                <li>Realistically you aren't going to write <em>React.createElement</em> every time that you want to create a component, so React provides an abstract class for you to use</li>
                <li>As long as your class extends from <em>React.Component</em> and provides a render method then it will work as a React component</li>
                <li>props are passed in to the constructor of the component and added to the instance so they can be reference by <em>this.props</em></li>
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
            </Example>
        </div>
    );
};

export default ClassLesson;