import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Example from '../../components/Example';

const PropsLesson = () => {
    return (
        <div>
            <ul>
                <li>Props (or properties) or things that you pass in to a component that allow you to provide data or configure functionality</li>
                <li>Props are allowed to have all sorts of different values, from primitives to complex objects to even JSX elements that can be rendered</li>
                <li>Any child elements in your JSX will be passed in to the component via <em>props.children</em></li>
                <li>This allows the parent component to decide where or how its child components will render</li>
            </ul>
            <h3>Describing the shape of your props</h3>
            <ul>
                <li>If you use TypeScript or Flow, then you can annotate your props object so that IDEs can provide intellisense when writing JSX</li>
                <li>However, React also provides a way for you to specify they types of your props in code so that it can provide console warnings for developers if they do not match</li>
                <li>Facebook provides a lengthy list of prop types that you can use on their <a href="https://facebook.github.io/react/docs/typechecking-with-proptypes.html" target="_blank">documentation site</a></li>
                <li>These prop types need to be 'statically' added to your component</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`MyComponent.propTypes = {
    title: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.number,
    children: React.PropTypes.instanceOf(MyOtherComponent),
};`}
                </CodeBlock>
                <div>There are too many to give examples for all of them so be sure to check out Facebook's documentation</div>
            </Example>
            <h3>Developer Warnings</h3>
            <ul>
                <li>React will only issue warnings to the developer console if you built your app with NODE_ENV environment variable set to anything other than production.</li>
                <li>Once you do a production build with Webpack then React will remove a lot of developer features</li>
            </ul>
            <h3>Default Properties</h3>
            <ul>
                <li>It is also possible to specify default properties for your component</li>
                <li>These default properties will only be used to set values for properties that are <em>undefined</em>.  <em>null</em> values are considered set</li>
                <li>The default prop values are set statically on the component</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`MyComponent.defaultProps = {
    myProp: 'my default value',
};`}
                </CodeBlock>
            </Example>
        </div>
    );
};

export default PropsLesson;