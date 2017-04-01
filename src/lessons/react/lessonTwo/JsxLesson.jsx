import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import Example from '../../../components/Example';

const JsxLesson = () => {
    return (
        <div>
            <ul>
                <li>Realistically you will not want to write out the verbose syntax of <em>React.createElement</em> all throughout your codebase</li>
                <li>Facebook didn't either, so they created JSX to simplify their code</li>
                <li>They saw that since their components have props and children it would make sense to use an XML markup and transpile that down to the original JavaScript at build time</li>
            </ul>
            <Example>
                <div>Our previous example becomes something like this</div>
                <CodeBlock>
                    {`<div className="myClass" dataId="10">myContent</div>`}
                </CodeBlock>
                <div>Be careful not to confuse this with HTML.  This is a <em>div</em> React element that happens to render an HTML <em>div</em>.</div>
            </Example>
            <ul>
                <li>One thing to keep in mind though is that even though it looks like you are writing HTML, you are really writing JavaScript that creates React elements that themselves render HTML</li>
            </ul>
            <h3>JSX as a Template Language</h3>
            <ul>
                <li>You can think of JSX as XML meets Handlebars (or insert your favorite templating language here)</li>
                <li>You can add raw JavaScript into your JSX using <em>{'{'}</em> and <em>{'}'}</em></li>
                <li>If something is coercible into a boolean then it will be used as a conditional expression</li>
                <li>If something is coercible into a string then it will be rendered</li>
                <li>If something is coercible into both then it will be used as a conditional as well as rendered, so be careful what you use for conditionals</li>
                <li>Just like XML, a JSX expression can only return 1 top level element.  If you have a list of elements then you need to wrap them with an element like a <em>div</em></li>
            </ul>
            <Example>
                <div>This will conditionally render a div based on the value of the in-scope variable <em>showElement</em></div>
                <CodeBlock>
                    {`{showElement && <div>This will only render if props.showElement is truthy</div>}`}
                </CodeBlock>
                <div>This will only render the div if the array has a non-zero length</div>
                <CodeBlock>
                    {`{myArray.length && <div>This will only render if myArray.length is truthy</div>}`}
                </CodeBlock>
                <div>However, since <em>myArray.length</em> is coercible into a string it will render a <em>0</em> in addition to not rendering the div.  If you are going to use things like <em>length</em> to conditionally hide elements then be sure to be explicit in your check.</div>
                <CodeBlock>
                    {`{myArray.length > 0 && <div>This will only render if myArray.length is truthy</div>}`}
                </CodeBlock>
                <div>This example will work as you would expect</div>
            </Example>
            <h4>Loops</h4>
            <ul>
                <li>You can also use JSX expressions to loop over arrays or objects</li>
                <li>Array.prototype.map and Array.prototype.filter are very useful here since they return a new Array with the modified data, which means that the modified data will be rendered</li>
                <li>Array.prototype.forEach would not work since it does not return the data</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`const strings = ['1', '2', '3'];
return (
    <div>
        {strings.map((string, index) => <span key={index}>{string}</span>)}
    </div>
);`}
                </CodeBlock>
                <div>This example will render a div with a span inside of it for each string in the array</div>
                <div>NOTE: when you loop over something and return multiple elements you are supposed to add the <em>key</em> property to the dynamic elements with unique values.  This allows React to figure out which elements have changed whenever it re-renders.</div>
            </Example>
            <Example>
                <CodeBlock>
                    {`const strings = ['1', '2', '3'];
return (
    <div>
        {strings.filter((string) => string === '2').map((string, index) => <span key={index}>{string}</span>)}
    </div>
);`}
                </CodeBlock>
                <div>This example will render a div with a span inside of it for each string in the array that matches the supplied filter</div>
            </Example>
            <ul>
                <li>It might look weird to have JSX inside of your normal JavaScript expression, but just remember that it is converted into <em>React.createElement(...)</em> by your transpiler so it really is in fact just plain JavaScript</li>
                <li>
                    One important thing to remember is that only HTML elements are allowed to be written in JSX with lowercase tags.
                    <ul>
                        <li>If you have a variable reference to a custom element that you want to render with JSX then you need to make sure that your variable starts with an uppercase letter</li>
                        <li>React will assume that elements starting with a lowercase are HTML elements</li>
                    </ul>
                </li>
            </ul>
            <Example>
                <CodeBlock>
                    {`const MyElement = React.createElement('div', null, null);
return (
    <MyElement />
);`}
                </CodeBlock>
            </Example>
        </div>
    );
};

export default JsxLesson;