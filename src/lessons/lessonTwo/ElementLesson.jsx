import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Example from '../../components/Example';

const ElementLesson = () => {
    return (
        <div>
            <ul>
                <li>Elements are the building blocks of your UI</li>
                <li>
                    These elements have a type and can also have properties and children passed to them
                    <ul>
                        <li>The type is either a string that corresponds to an HTML tag <em>(div)</em> or a class <em>(custom component)</em></li>
                    </ul>
                </li>
                <li>
                    Properties are used to configure or pass data to the element
                    <ul>
                        <li>It is important to remember that you are not creating <em>HTML</em> elements even if the tag is the same</li>
                        <li>Instead you are creating a React element that happens to render an HTML element with the same name</li>
                        <li>Property names are not the same as the base HTML attributes.  For instance you need to use <em>className</em> instead of <em>class</em>, and other any attributes with a <em>-</em> are instead camel cased, and <em>for</em> is now <em>htmlFor</em></li>
                    </ul>
                </li>
                <li>Children are elements that are nested inside of the current element (i.e. span element inside of a div element)</li> 
            </ul>
            <Example>
                <CodeBlock>
                    {`React.createElement('div', { className: 'myClass', dataId: '10' }, 'myContent');`}
                </CodeBlock>
                will output
                <CodeBlock>
                    {`<div class='myClass' data-id='10'>myContent</div>`}
                </CodeBlock>
            </Example>
            <h3>Functional Design</h3>
            <ul>
                <li>It can also be useful to think of your elements in a functional manner</li>
                <li>You can think of elements as functions that take in a props object and return a component tree to be rendered</li>
                <li>In this way of thinking your entire component tree is a function that composes other functions</li>
                <li>If you want to modify how a component renders, instead of creating a new component that extends it consider creating a higher order component that wraps it</li>
            </ul>
        </div>
    );
};

export default ElementLesson;