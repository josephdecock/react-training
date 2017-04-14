import React from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const LessonOne = () => (
    <div>
        <Title>Lesson 1 - Introduction to React</Title>
        <Section title="What Is React (in a nutshell)" defaultOpen>
            <ul>
                <li>Course Materials available at <a href="https://github.com/jpeters5392/react-training" target="_blank">https://github.com/jpeters5392/react-training</a></li>
                <li>React is a library for building the UI layer of your application in a declarative and componentized way.</li>
                <li>Facebook took a practical view of real world web development and built a framework based on that</li>
                <li>As such, it is really only the <em>V</em> part of MVVM</li>
                <li>
                    For starters, it makes no apology about coupling your view markup with your component logic
                    <ul>
                        <li>How often are templates actually reused by multiple view models/components?</li>
                        <li>Putting the markup inside of the component explicitly defines ownership.</li>
                        <li>The purpose of your component is to render specific markup, so why separate them?</li>
                    </ul>
                </li>
                <li>
                    While it is not purely functional, it can be helpful to think of it that way.
                    <ul>
                        <li>You can think of components as functions that return component trees.</li>
                        <li>These functions can compose other functions (components).</li>
                        <li>The typical approach in React is not to extend another component, but wrap it with a higher order component.</li>
                    </ul>
                </li>
                <li>
                    React adheres to a "data down, actions up" approach
                    <ul>
                        <li>Data flows down from parent components to child components.</li>
                        <li>Data should not be passed back up.</li>
                        <li>Actions however, bubble up from child components to parent components.</li>
                    </ul>
                </li>
                <li>Out of the box React does not include any of the capabilities to build a full SPA, such as a router or state manager.</li>
                <li>The React ecosystem, however, has plenty of libraries that add those features.
                    <ul>
                        <li><a href="https://facebook.github.io/flux/" target="_blank">Flux</a></li>
                        <li><a href="http://redux.js.org/" target="_blank">Redux</a></li>
                        <li><a href="https://mobx.js.org/" target="_blank">Mobx</a></li>
                        <li><a href="https://reacttraining.com/react-router/" target="_blank">React-Router</a></li>
                        <li><a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en" target="_blank">React DevTools</a></li>
                    </ul>
                </li>
                <li>
                    Like other modern web frameworks, React uses a virtual DOM for performance reasons.
                    <ul>
                        <li>React renders the component tree into an in-memory virtual DOM and compares that to the previously rendered virtual component tree.</li>
                        <li>This allows React to do a diff between the previous and current component states and update only the DOM nodes that actually modified in the new render cycle.</li>
                        <li>This reduces DOM updates to only the items that were modified and improves performance.</li>
                    </ul>
                </li>
                <li>
                    The markup for React components is platform agnostic, which means that a library is needed to actually render the content into your target platform (browser, mobile device, etc...)
                    <ul>
                        <li><a href="https://facebook.github.io/react/docs/react-dom.html" target="_blank">react-dom</a> for browsers</li>
                        <li><a href="https://facebook.github.io/react/docs/react-dom-server.html" target="_blank">react-dom-server</a> for server side rendering</li>
                        <li><a href="https://facebook.github.io/react-native/">react-native</a> for certain mobile devices or operating systems</li>
                    </ul>
                </li>
                <li>When in the browser, you must write code that attaches (mounts) your application root to a DOM node.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`import { render } from 'react-dom';
// this would normally be a component that renders your application or your router config
const AppRoot = React.createElement('div', null, null);
render(AppRoot, document.getElementById('mountPoint'));`}
                </CodeBlock>
            </Example>
        </Section>
    </div>
);

export default LessonOne;