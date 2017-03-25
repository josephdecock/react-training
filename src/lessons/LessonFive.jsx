import React from 'react';
import Title from '../components/Title';
import Section from '../components/Section';
import Example from '../components/Example';
import CodeBlock from '../components/CodeBlock';

const LessonFive = () => (
    <div>
        <Title>Lesson 5 - Routing</Title>
        <Section title="React Router" defaultOpen>
            <ul>
                <li>There are several router libraries available for React, but <em>react-router</em> is by far the most popular.</li>
                <li>react-router has two main versions that differ quite a bit in how they work.  Version 3 is going to be supported long term but not receive new updates, and version 4 is their new approach going forward.</li>
                <li>Version 3 is built around the concept of a single router object that contains all of the application's routes.</li>
                <li>Version 4 is built in such a way that your actual routes can be defined along with the different <em>routable</em> components.  (Think attribute routing in .NET MVC/WebApi)</li>
                <li>This tutorial is using Version 3 since that is what I have personally used.  Version 4 is still pretty new so you will likely only see it in newer applications.</li>
                <li>react-router is a typical JavaScript routing library.  You define routes with path/query parameters and map those to components.</li>
                <li>
                    However, react-router also introduces some higher-order concepts.
                    <ul>
                        <li>You are able to nest components in your router configuration.</li>
                        <li>This means that the top-most component will have any nested components passed in as <em>props.children</em>, and the top components will decide where and how to render them.</li>
                    </ul>
                </li>
            </ul>
            <h3>History</h3>
            <ul>
                <li>In order to support navigation APIs like back/forward, you must pass a history implementation to react-router.</li>
                <li>react-router ships with browser and hash history implementations that you can plug in as needed, or you can create your own implementation.</li>
            </ul>
            <h3>Redirects</h3>
            <ul>
                <li>react-router supports redirecting the browser to another route.</li>
                <li>Defining an <em>IndexRoute</em> means that if no other route matches then it will use that route instead.  This will <em>NOT</em> change the URL though.</li>
                <li>If you would rather redirect the browser to a different route then you can use an <em>IndexRedirect</em>.  This will actually change the location to the route specified.</li>
                <li>There is also a <em>Redirect</em> component that is like an IndexRedirect, but in this case will redirect only from a specific route instead of all unhandled routes.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Home from './Home';
import LessonOne from './lessons/LessonOne';
import LessonTwo from './lessons/LessonTwo';
import LessonThree from './lessons/LessonThree';
import LessonFour from './lessons/LessonFour';
import LessonFive from './lessons/LessonFive';

const Routes = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <IndexRedirect to="/lesson1" />
            <Route path="/lesson1" component={LessonOne} />
            <Route path="/lesson2(/:section)" component={LessonTwo} />
            <Route path="/lesson3" component={LessonThree} />
            <Route path="/lesson4" component={LessonFour} />
            <Route path="/lesson5" component={LessonFive} />
        </Route>
    </Router>
);

const App = () => (
    <Routes />
);

ReactDOM.render(<App />, document.getElementById('appRoot'));

// or you can do this instead
ReactDOM.render(<Routes />, document.getElementById('appRoot'));`}
                </CodeBlock>
                <div>This <em>Routes</em> component that we have created is essentially going to become our top-level application component.</div>
                <div><em>Home</em> is a higher order component that renders for any route, and the more specific components will be passed in via <em>props.children</em>.</div>
                <div>In this example, the <em>LessonTwo</em> component has an optional path parameter <em>section</em>.  Parameters are noted with <em>:</em>, and anything enclosed in parentheses is considered optional.</div>
            </Example>
            <h3>Navigating</h3>
            <ul>
                <li>
                    There are several methods exposed by react-router that let you navigate.
                    <ul>
                        <li><em>go</em> lets you move forward or backward in the history.</li>
                        <li><em>push</em> lets you push a new route on to the end of the history and then navigates there.</li>
                        <li><em>replace</em> lets you navigate to a route but it replaces the last history item instead of creating a new history point.</li>
                    </ul>
                </li>
            </ul>
            <h3>Accessing Router Information in Components</h3>
            <ul>
                <li>react-router will pass pieces of information to all components that have routes.  So in the example above, Home and Lessons 1-5 will all receive router information, but any components that those render will not.</li>
                <li>In order to allow deeply nested components to be able to access route information, react-router exposes a <em>withRouter</em> higher order component.  If you wrap your component with <em>withRouter</em> then it will pass in several properties to your component.</li>
                <li>If you need to navigate you can either use the methods like <em>go</em>, <em>push</em>, and <em>replace</em> on the router instance, or you can import those functions standalone into your component.</li>
                <li>If you want to create a link that jumps you to a different route instead of doing a <em>router.push</em> to push the new route, you can just use the <em>Link</em> component provided by react-router and it will handle updating the URL when clicked.</li>
            </ul>
        </Section>
    </div>
);

export default LessonFive;