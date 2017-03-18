import React from 'react';
import Title from '../components/Title';
import Section from '../components/Section';
import Example from '../components/Example';
import CodeBlock from '../components/CodeBlock';

const LessonOne = () => (
    <div>
        <Title>Lesson 1 - Introduction to React</Title>
        <Section title="What Is React (in a nutshell)" defaultOpen>
            <ul>
                <li>React is a library for building the UI layer of your application in a declarative and componentized way.</li>
                <li>It does not include any of the capabilities to build a full SPA such as a router or state manager.</li>
                <li>The React ecosystem, however, has plenty of libraries that add those features.
                    <ul>
                        <li><a href="https://facebook.github.io/flux/" target="_blank">Flux</a></li>
                        <li><a href="http://redux.js.org/" target="_blank">Redux</a></li>
                        <li><a href="https://mobx.js.org/" target="_blank">Mobx</a></li>
                        <li><a href="https://reacttraining.com/react-router/" target="_blank">React-Router</a></li>
                    </ul>
                </li>
                <li>
                    Your component markup is platform agnostic so a library is needed to actually render the content into your target platform (browser, mobile device, etc...)
                    <ul>
                        <li><a href="https://facebook.github.io/react/docs/react-dom.html" target="_blank">react-dom</a> for browsers</li>
                        <li><a href="https://facebook.github.io/react/docs/react-dom-server.html" target="_blank">react-dom-server</a> for server side rendering</li>
                        <li><a href="https://facebook.github.io/react-native/">react-native</a> for certain mobile devices or operating systems</li>
                    </ul>
                </li>
                <li>
                    Uses a virtual DOM for performance
                    <ul>
                        <li>React renders the component tree into a virtual DOM in-memory and compares that to the previously rendered component tree</li>
                        <li>This allows React to do a diff between the previous and current component states and update only the DOM nodes that actually changed</li>
                        <li>This reduces DOM updates and improves performance</li>
                    </ul>
                </li>
                <li>When in the browser, you must write code that attaches (mounts) your application root to a DOM node</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`import { render } from 'react-dom';
// this would normally be a component that renders your application, or your router config
const AppRoot = React.createElement('div', null, null);
render(AppRoot, document.getElementById('mountPoint'));`}
                </CodeBlock>
            </Example>
        </Section>
    </div>
);

export default LessonOne;