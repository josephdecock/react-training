import React from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import Example from '../../components/Example';
import CodeBlock from '../../components/CodeBlock';

const LessonFive = (props) => (
    <div>
        <Title>Lesson 5 - ImmutableJS</Title>
        <Section title="Redux Diffs" defaultOpen>
            <ul>
                <li>Redux performs a lot of performance optimizations for you out of the box but it relies on diffs.</li>
                <li>This is why it is so important to not mutate the existing state in your reducers, but instead to return new <em>copies</em> of the state.</li>
                <li>If you mutate the previous state in your reducer, then when Redux compares the previous state to the new state to see if there were any changes it will not see any.</li>
                <li>Also, Redux defines a default <em>shouldComponentUpdate</em> that only updates your connected components if the state props for that component have changed.</li>
                <li>It performs a shallow equality comparison, so unless the state prop is the exact same value as the previous render cycle then your components will always re-render even if they do not need to.</li>
                <li>This is why a lot of React/Redux developers use ImmutableJS for their state management.</li>
                <li>ImmutableJS helps to prevent mutations as well as help with the shallow equality checks.</li>
                <li>If you want to use ImmutableJS though, then you need to go all in and let the immutable objects flow all of the way in to your components.</li>
                <li>The ImmutableJS <a href="https://facebook.github.io/immutable-js/" target="_blank">documentation</a> is fairly robust.</li>
            </ul>
            <Example>
                <CodeBlock>
                    {`// non-immutable
const initialState = {
    postIds: [],
    postsById: {},
};

// immutable version
const initialState = Immutable.Map({
    postIds: Immutable.List(),
    postsById: Immutable.Map(),
});

// this will return an Immutable List containing the posts
const postsSelector = (state) => state.get('postIds').map((id) => state.getIn(['postsById', id]));
// use reselect to create a memoized version of the selector to ensure that the same List is returned every time
const memoizedSelector = createSelector(postsSelector, (posts) => posts));
`}
                </CodeBlock>
            </Example>
            <ul>
                <li>If you decide not to use ImmutableJS, then you will likely find yourself needing to explicitly add <em>shouldComponentUpdate</em> hooks to your components to prevent them from re-rendering too often.</li>
                <li>While it is true that the DOM will not be updated unless the virtual tree has been modified, it is still extra CPU cycles that are not necessary.</li>
            </ul>
            <h3>Usage with Redux</h3>
            <ul>
                <li><em>combineReducers</em> provided by Redux expects your state to be a POJO, so if you are using a fully Immutable state then you need to use a different <em>combineReducers</em>.</li>
                <li>Fortunately <a href="https://github.com/gajus/redux-immutable" target="_blank">redux-immutable</a> provides a new version of <em>combineReducers</em> that expects your state to be a fully immutable object.</li>
            </ul>
            <h3>React Router</h3>
            <ul>
                <li>If you use react-router with ImmutableJS then you need to provide a custom routing reducer that allows react-router to properly interact with a fully immutable state.</li>
                <li>You will likely be using <a href="https://github.com/reactjs/react-router-redux" target="_blank">react-router-redux</a> since that allows you to sync router history with your Redux state.</li>
                <li>However, that expects your state to be a POJO so you need some custom reducers in order to work with an Immutable state.</li>
                <li>I would highly recommend checking <a href="https://github.com/gajus/redux-immutable/blob/master/README.md#using-with-react-router-redux" target="_blank">redux-immutable</a> as it has sample code to help with that.</li>
            </ul>
        </Section>
    </div>
);

export default LessonFive;