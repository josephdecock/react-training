import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Example from '../../components/Example';

const StatelessFunctionalComponents = () => {
    return (
        <div>
            <ul>
                <li>A large portion of your components are likely not going to need either state or lifecycle events.</li>
                <li>These components are often called <em>pure</em> components since they simply take in props and then render content that will be the same every time the props are the same.</li>
                <li>These are the easiest components to write and test since you do not have to worry about internal state.</li>
                <li>My recommendation is to always start your components as stateless functional components and only switch to classes when you need to deal with lifecycle methods or state.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`const MyComponent = (props) => {
    const generatedTitle = \`Hello \${props.title}\`;
    return (
        <div>{generatedTitle}</div>
    );
};

MyComponent.propTypes = {
    title: React.PropTypes.string.isRequired,
};`}
                </CodeBlock>
                <div>Just because you cannot have local state does not mean that you cannot have local variables.  A stateless functional component is essentially a component with only a render function, so you can still define variables inside of your function and use them.</div>
            </Example>
            <Example>
                <CodeBlock>
                    {`const MyComponent = (props) => (
    <div>{props.title}</div>
);

MyComponent.propTypes = {
    title: React.PropTypes.string.isRequired,
};`}
                </CodeBlock>
                <div>This is the shorthand approach to returning a JSX expression if you do not need to create local variables.</div>
            </Example>
        </div>
    );
};

export default StatelessFunctionalComponents;